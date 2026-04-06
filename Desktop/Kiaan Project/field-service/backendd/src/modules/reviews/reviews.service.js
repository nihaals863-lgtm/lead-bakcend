const prisma = require('../../config/db');

const getAll = async () => {
  return await prisma.review.findMany({
    include: { customer: true },
    orderBy: { createdAt: 'desc' }
  });
};

const create = async (reviewData) => {
  const { customerId, rating, comment } = reviewData;
  return await prisma.review.create({
    data: {
      customerId: parseInt(customerId),
      rating: parseInt(rating),
      comment
    },
    include: { customer: true }
  });
};

const remove = async (id) => {
  return await prisma.review.delete({
    where: { id: parseInt(id) }
  });
};

module.exports = { getAll, create, remove };
