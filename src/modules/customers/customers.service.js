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
  const customerId = parseInt(id);
  const customer = await prisma.customer.findUnique({ where: { id: customerId } });
  
  if (!customer) return;

  return await prisma.$transaction(async (tx) => {
    // Delete customer record first (child)
    await tx.customer.delete({
      where: { id: customerId }
    });
    
    // Then delete associated user record (parent)
    if (customer.userId) {
      await tx.user.delete({
        where: { id: customer.userId }
      });
    }
  });
};

const getFinancialSummary = async (customerId) => {
  const parsedId = parseInt(customerId);
  if (isNaN(parsedId)) {
    const err = new Error('Invalid customer ID');
    err.status = 400;
    throw err;
  }

  // Find all job ledger entries for jobs belonging to this customer
  const ledgers = await prisma.jobLedger.findMany({
    where: {
      job: {
        customerId: parsedId
      }
    }
  });

  let totalDeposits = 0;
  let totalLaborSpent = 0;
  let totalMaterialSpent = 0;

  ledgers.forEach(entry => {
    const amount = parseFloat(entry.amount);
    
    if (entry.type === 'CREDIT') {
      totalDeposits += amount;
    } else if (entry.type === 'DEBIT') {
      if (entry.category === 'LABOR') {
        totalLaborSpent += amount;
      } else if (entry.category === 'MATERIAL') {
        totalMaterialSpent += amount;
      }
    }
  });

  const remainingBalance = totalDeposits - (totalLaborSpent + totalMaterialSpent);

  return {
    totalDeposits,
    totalLaborSpent,
    totalMaterialSpent,
    remainingBalance
  };
};

module.exports = { getAll, create, update, remove, getFinancialSummary };
