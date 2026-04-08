const prisma = require('../../config/db');

const getAll = async (user) => {
  if (user.role === 'CUSTOMER') {
    return await prisma.invoice.findMany({
      where: { customerId: user.customer.id },
      include: { customer: true, payments: true }
    });
  }
  return await prisma.invoice.findMany({
    include: { customer: true, payments: true }
  });
};
const create = async (invoiceData) => {
  const { sendWithEstimate, estimateId, ...data } = invoiceData;
  
  // Link to job if estimateId is provided
  if (estimateId && !data.jobId) {
    const estId = typeof estimateId === 'string' ? parseInt(estimateId.replace('EST-', '')) : estimateId;
    if (!isNaN(estId)) {
      const job = await prisma.job.findUnique({ where: { estimateId: estId } });
      if (job) {
        data.jobId = job.id;
      }
    }
  }

  // Ensure numeric fields are correctly typed
  if (data.customerId) data.customerId = parseInt(data.customerId);
  if (data.total) data.total = parseFloat(data.total);

  const invoice = await prisma.invoice.create({
    data: data
  });

  // Handle bundled send logic
  if (sendWithEstimate && estimateId) {
    const estId = typeof estimateId === 'string' ? parseInt(estimateId.replace('EST-', '')) : estimateId;
    if (!isNaN(estId)) {
      await prisma.estimate.update({
        where: { id: estId },
        data: { status: 'PENDING' }
      });
    }
  }

  return invoice;
};

const update = async (id, data) => {
  return await prisma.invoice.update({
    where: { id: parseInt(id) },
    data
  });
};

const remove = async (id) => {
  return await prisma.invoice.delete({
    where: { id: parseInt(id) }
  });
};

module.exports = { getAll, create, update, remove };
