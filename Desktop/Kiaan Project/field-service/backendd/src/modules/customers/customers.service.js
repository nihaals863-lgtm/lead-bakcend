const prisma = require('../../config/db');
const bcrypt = require('bcrypt');

const getAll = async () => {
  return await prisma.customer.findMany({
    include: { user: { select: { email: true } } }
  });
};

const create = async (customerData) => {
  const { password, confirmPassword, ...rest } = customerData;
  
  // 1. Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: rest.email }
  });
  
  if (existingUser) {
    const error = new Error('A user with this email already exists');
    error.status = 400;
    throw error;
  }

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Create User and Customer in a transaction
  return await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email: rest.email,
        password: hashedPassword,
        name: rest.name,
        role: 'CUSTOMER'
      }
    });

    return await tx.customer.create({
      data: {
        ...rest,
        userId: user.id
      }
    });
  });
};

const update = async (id, customerData) => {
  return await prisma.customer.update({
    where: { id: parseInt(id) },
    data: customerData
  });
};

const remove = async (id) => {
  return await prisma.customer.delete({
    where: { id: parseInt(id) }
  });
};

module.exports = { getAll, create, update, remove };
