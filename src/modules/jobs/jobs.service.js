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
      estimate: true
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
      estimate: true
    }
  });
};

const assignTechnician = async (id, employeeId) => {
  return await prisma.job.update({
    where: { id: parseInt(id) },
    data: {
      assignedTo: employeeId ? parseInt(employeeId) : null
    },
    include: { technician: true }
  });
};

const create = async (jobData) => {
  try {
    return await prisma.job.create({
      data: jobData
    });
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
    }
  }
};

const update = async (id, jobData) => {
  const job = await prisma.job.update({
    where: { id: parseInt(id) },
    data: jobData,
    include: { customer: true, technician: true, notes: true, photos: true }
  });
  
  if (jobData.status === 'COMPLETED') {
    await checkAndGenerateInvoice(id);
  }
  
  return job;
};

const updateStatus = async (id, status) => {
  const job = await prisma.job.update({
    where: { id: parseInt(id) },
    data: { status }
  });

  if (status === 'COMPLETED') {
    await checkAndGenerateInvoice(id);
  }

  return await getById(id);
};

const addNote = async (jobId, content) => {
  return await prisma.note.create({
    data: {
      jobId: parseInt(jobId),
      content
    }
  });
};

const addPhoto = async (jobId, url) => {
  return await prisma.photo.create({
    data: {
      jobId: parseInt(jobId),
      url
    }
  });
};

const remove = async (id) => {
  return await prisma.job.delete({
    where: { id: parseInt(id) }
  });
};

module.exports = { getAll, getById, create, update, updateStatus, addNote, addPhoto, assignTechnician, remove };
