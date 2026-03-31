const { randomUUID } = require('crypto');
const prisma = require('../../config/db');

/**
 * Public Lead Intake
 */
const create = async (data) => {
  return await prisma.lead.create({
    data: {
      id: randomUUID(),
      ...data,
      preferredDate: data.preferredDate ? new Date(data.preferredDate) : null,
      status: 'NEW'
    }
  });
};

/**
 * Internal Lead Management
 */
const getAll = async () => {
  return await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  });
};

const getById = async (id) => {
  return await prisma.lead.findUnique({
    where: { id }
  });
};

const updateStatus = async (id, status) => {
  return await prisma.lead.update({
    where: { id },
    data: { status }
  });
};

/**
 * Propose Schedule
 */
const proposeSchedule = async (id, data) => {
  return await prisma.lead.update({
    where: { id },
    data: {
      proposedDate: data.proposedDate ? new Date(data.proposedDate) : null,
      proposedTimeSlot: data.proposedTimeSlot,
      internalNote: data.internalNote,
      customerMessage: data.customerMessage,
      status: 'REVIEWING'
    }
  });
};

/**
 * Convert Lead to Job
 * 1. Find/Create Customer
 * 2. Create Job
 * 3. Update Lead Status
 */
const convertToJob = async (id) => {
  const lead = await prisma.lead.findUnique({ where: { id } });
  if (!lead) throw new Error('Lead not found');
  if (lead.status === 'CONVERTED') throw new Error('Lead already converted');

  return await prisma.$transaction(async (tx) => {
    // 1. Find or Create Customer
    let customer = await tx.customer.findFirst({
      where: {
        OR: [
          { email: lead.email },
          { phone: lead.phone }
        ]
      }
    });

    if (!customer) {
      customer = await tx.customer.create({
        data: {
          name: `${lead.firstName} ${lead.lastName}`,
          email: lead.email,
          phone: lead.phone,
          address: lead.address,
        }
      });
    }

    // 2. Create Job
    const job = await tx.job.create({
      data: {
        customerId: customer.id,
        title: `${lead.serviceType} for ${lead.firstName}`,
        description: lead.jobDescription,
        status: 'SCHEDULED', // Default as per requirement
        scheduledAt: lead.proposedDate || lead.preferredDate || null,
      }
    });

    // 3. Update Lead
    await tx.lead.update({
      where: { id },
      data: { status: 'CONVERTED' }
    });

    return job;
  });
};

module.exports = {
  create,
  getAll,
  getById,
  updateStatus,
  proposeSchedule,
  convertToJob
};
