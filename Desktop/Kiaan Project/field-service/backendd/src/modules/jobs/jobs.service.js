const prisma = require('../../config/db');

const getAll = async (user, filters = {}) => {
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
    const job = await prisma.job.create({
      data: jobData
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
  
  const job = await prisma.job.update({
    where: { id: parseInt(id) },
    data: jobData,
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

const addFile = async (jobId, fileData) => {
  const file = await prisma.jobFile.create({
    data: {
      jobId: parseInt(jobId),
      name: fileData.name,
      url: fileData.url,
      type: fileData.type,
      size: fileData.size
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

module.exports = { getAll, getById, create, update, updateStatus, addNote, addPhoto, addFile, assignTechnician, remove };
