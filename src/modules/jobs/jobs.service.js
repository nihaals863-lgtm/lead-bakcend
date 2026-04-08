const prisma = require('../../config/db');

let scheduledAtBackfilled = false;

const normalizeScheduledAt = (value) => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const ensureScheduledAtBackfill = async () => {
  if (scheduledAtBackfilled) return;
  scheduledAtBackfilled = true;
  try {
    await prisma.job.updateMany({
      where: { scheduledAt: null },
      data: { scheduledAt: new Date() }
    });
  } catch (error) {
    console.error('Failed to backfill missing scheduledAt values', error);
  }
};

const getAll = async (user, filters = {}) => {
  await ensureScheduledAtBackfill();
  const where = {};

  if (user.role === 'TECHNICIAN') {
    where.assignedTo = user.employee.id;
  } else if (user.role === 'CUSTOMER') {
    where.customerId = user.customer.id;
  }

  // Apply filters
  if (filters.status === 'active') {
    where.status = { in: ['SCHEDULED', 'IN_PROGRESS'] };
  } else if (filters.status) {
    where.status = filters.status;
  }

  if (filters.unassigned === 'true') {
    where.assignedTo = null;
  }

  return await prisma.job.findMany({
    where,
    include: { 
      customer: true, 
      technician: true, 
      notes: true, 
      photos: true,
      invoice: true,
      estimate: true,
      history: { orderBy: { createdAt: 'desc' } },
      files: true
    }
  });
};

const getById = async (id) => {
  return await prisma.job.findUnique({
    where: { id: parseInt(id) },
    include: { 
      customer: true, 
      technician: true, 
      notes: true, 
      photos: true,
      invoice: true,
      estimate: true,
      history: { orderBy: { createdAt: 'desc' } },
      files: true
    }
  });
};

const addHistory = async (jobId, action, by, type) => {
  await prisma.jobHistory.create({
    data: { jobId: parseInt(jobId), action, by, type }
  }).catch(e => console.error('Failed to log job history', e));
};

const assignTechnician = async (id, employeeId) => {
  const job = await prisma.job.update({
    where: { id: parseInt(id) },
    data: {
      assignedTo: employeeId ? parseInt(employeeId) : null
    },
    include: { technician: true, customer: true }
  });

  // Log History
  addHistory(id, employeeId ? `Assigned to ${job.technician?.name || 'Technician'}` : 'Technician Unassigned', 'System', 'assignment');

  // Trigger Notification for Technician
  if (job.technician?.userId) {
    const notificationsService = require('../notifications/notifications.service');
    notificationsService.createNotification(job.technician.userId, {
      type: 'JOB_ASSIGNED',
      title: 'New Job Assigned',
      message: `You have been assigned to job #${job.id}: ${job.title} for ${job.customer.name}`,
      link: `/jobs/${job.id}`
    });
  }

  return job;
};

const create = async (jobData) => {
  try {
    const normalizedScheduledAt =
      normalizeScheduledAt(jobData.scheduledAt || jobData.scheduledDate) || new Date();

    const job = await prisma.job.create({
      data: {
        ...jobData,
        scheduledAt: normalizedScheduledAt
      }
    });
    addHistory(job.id, 'Job Created', 'System', 'status');
    return job;
  } catch (error) {
    console.error('Prisma Job Create Error:', error);
    throw error;
  }
};

const checkAndGenerateInvoice = async (jobId) => {
  const job = await prisma.job.findUnique({
    where: { id: parseInt(jobId) },
    include: { estimate: true }
  });

  if (job?.status === 'COMPLETED') {
    const existingInvoice = await prisma.invoice.findUnique({ where: { jobId: job.id } });
    if (!existingInvoice) {
      await prisma.invoice.create({
        data: {
          customerId: job.customerId,
          jobId: job.id,
          status: 'UNPAID',
          total: job.estimate ? job.estimate.totalAmount : 0.00
        }
      });
      addHistory(jobId, 'Invoice Automatically Generated', 'System', 'financial');
    }
  }
};

const update = async (id, jobData) => {
  const oldJob = await prisma.job.findUnique({ where: { id: parseInt(id) } });

  const hasScheduledField =
    Object.prototype.hasOwnProperty.call(jobData, 'scheduledAt') ||
    Object.prototype.hasOwnProperty.call(jobData, 'scheduledDate');

  const normalizedScheduledAt = hasScheduledField
    ? normalizeScheduledAt(jobData.scheduledAt || jobData.scheduledDate) || new Date()
    : (oldJob?.scheduledAt || new Date());

  const job = await prisma.job.update({
    where: { id: parseInt(id) },
    data: {
      ...jobData,
      scheduledAt: normalizedScheduledAt
    },
    include: { customer: true, technician: true, notes: true, photos: true }
  });
  
  if (jobData.status && jobData.status !== oldJob.status) {
    addHistory(id, `Status updated to ${jobData.status}`, 'System', 'status');
    if (jobData.status === 'COMPLETED') {
      await checkAndGenerateInvoice(id);
    }
  }
  
  return job;
};

const updateStatus = async (id, status) => {
  const oldJob = await prisma.job.findUnique({ where: { id: parseInt(id) } });
  
  const job = await prisma.job.update({
    where: { id: parseInt(id) },
    data: { status }
  });

  if (status !== oldJob.status) {
    addHistory(id, `Status updated to ${status}`, 'System', 'status');
    if (status === 'COMPLETED') {
      await checkAndGenerateInvoice(id);
    }
  }

  return await getById(id);
};

const addNote = async (jobId, content) => {
  const note = await prisma.note.create({
    data: {
      jobId: parseInt(jobId),
      content
    }
  });
  addHistory(jobId, 'Note added', 'System', 'note');
  return note;
};

const addPhoto = async (jobId, url) => {
  const photo = await prisma.photo.create({
    data: {
      jobId: parseInt(jobId),
      url
    }
  });
  addHistory(jobId, 'Photo uploaded', 'System', 'photo');
  return photo;
};

const removePhoto = async (jobId, url) => {
  await prisma.photo.deleteMany({
    where: {
      jobId: parseInt(jobId),
      url
    }
  });
  addHistory(jobId, 'Photo deleted', 'System', 'photo');
  return { success: true };
};

const addFile = async (jobId, fileData) => {
  const url = fileData.url || fileData.name;
  const size = (() => {
    if (fileData.size === undefined || fileData.size === null) return null;
    if (typeof fileData.size === 'number') return fileData.size;
    if (typeof fileData.size === 'string') {
      // Accept UI strings like "0.0 MB" and persist bytes
      const mb = parseFloat(fileData.size);
      if (!isNaN(mb)) return Math.round(mb * 1024 * 1024);
      const asInt = parseInt(fileData.size, 10);
      return Number.isFinite(asInt) ? asInt : null;
    }
    return null;
  })();

  const file = await prisma.jobFile.create({
    data: {
      jobId: parseInt(jobId),
      name: fileData.name,
      url,
      type: fileData.type,
      size
    }
  });
  addHistory(jobId, `File attached: ${file.name}`, 'System', 'file');
  return file;
};

const remove = async (id) => {
  return await prisma.job.delete({
    where: { id: parseInt(id) }
  });
};

const updateLocation = async (id, employeeId, { latitude, longitude }) => {
  const parsedId = typeof id === 'string' ? parseInt(id.replace(/\D/g, ''), 10) : parseInt(id, 10);
  const job = await prisma.job.findUnique({ where: { id: parsedId } });
  if (!job) throw new Error('Job not found');
  if (job.assignedTo !== parseInt(employeeId)) {
    throw new Error('Only the assigned technician can update the job location');
  }

  // Use raw SQL to bypass generate lock EPERM securely mapping only what we attached
  await prisma.$executeRawUnsafe(`
    UPDATE job 
    SET lastLatitude = ${parseFloat(latitude)}, 
        lastLongitude = ${parseFloat(longitude)}, 
        lastLocationUpdate = NOW(3)
    WHERE id = ${parsedId}
  `);

  // Add to history bypassing Prisma client generation lock
  await prisma.$executeRawUnsafe(`
    INSERT INTO job_location_history (jobId, latitude, longitude, recordedAt)
    VALUES (${parsedId}, ${parseFloat(latitude)}, ${parseFloat(longitude)}, NOW(3))
  `);

  return { success: true };
};

const getLocation = async (id) => {
  const parsedId = typeof id === 'string' ? parseInt(id.replace(/\D/g, ''), 10) : parseInt(id, 10);
  const result = await prisma.$queryRawUnsafe(`
    SELECT lastLatitude as latitude, lastLongitude as longitude, lastLocationUpdate 
    FROM job 
    WHERE id = ${parsedId}
  `);
  return result[0];
};

const getLocationHistory = async (id, limit = 100) => {
  const parsedId = typeof id === 'string' ? parseInt(id.replace(/\D/g, ''), 10) : parseInt(id, 10);
  
  const history = await prisma.$queryRawUnsafe(`
    SELECT latitude, longitude, recordedAt
    FROM job_location_history
    WHERE jobId = ${parsedId}
    ORDER BY recordedAt ASC
    LIMIT ${parseInt(limit)}
  `);
  
  return history;
};

const getTrackingStatus = async (id) => {
  const parsedId = typeof id === 'string' ? parseInt(id.replace(/\D/g, ''), 10) : parseInt(id, 10);
  const result = await prisma.$queryRawUnsafe(`
    SELECT trackingActive, trackingStartedAt, trackingStoppedAt, lastLocationUpdate 
    FROM job 
    WHERE id = ${parsedId}
  `);
  return result[0];
};

const startTracking = async (id) => {
  const parsedId = typeof id === 'string' ? parseInt(id.replace(/\D/g, ''), 10) : parseInt(id, 10);
  await prisma.$executeRawUnsafe(`
    UPDATE job 
    SET trackingActive = true, 
        trackingStartedAt = NOW(3)
    WHERE id = ${parsedId}
  `);
  return { success: true };
};

const stopTracking = async (id) => {
  const parsedId = typeof id === 'string' ? parseInt(id.replace(/\D/g, ''), 10) : parseInt(id, 10);
  await prisma.$executeRawUnsafe(`
    UPDATE job 
    SET trackingActive = false, 
        trackingStoppedAt = NOW(3)
    WHERE id = ${parsedId}
  `);
  return { success: true };
};

module.exports = { 
  getAll, 
  getById, 
  create, 
  update, 
  updateStatus, 
  addNote, 
  addPhoto, 
  removePhoto,
  addFile, 
  assignTechnician, 
  remove, 
  updateLocation, 
  getLocation,
  getLocationHistory,
  getTrackingStatus,
  startTracking,
  stopTracking
};
