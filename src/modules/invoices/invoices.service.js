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
  return await prisma.invoice.create({
    data: invoiceData
  });
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
