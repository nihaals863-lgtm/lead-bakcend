const prisma = require('../../config/db');

const bcrypt = require('bcrypt');

const getAll = async (filters = {}) => {
  const where = {};
  if (filters.role) {
    where.role = filters.role;
  }
  return await prisma.employee.findMany({
    where,
    include: { user: { select: { email: true, role: true } } }
  });
};

const create = async (employeeData) => {
  const { password, confirmPassword, status, email, ...rest } = employeeData;
  
  // 1. Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: email }
  });
  
  if (existingUser) {
    const error = new Error('A user with this email already exists');
    error.status = 400;
    throw error;
  }

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Map role to Uppercase for Enum
  const role = rest.role.toUpperCase();

  // 4. Create User and Employee in a transaction
  return await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: rest.name,
        role: role
      }
    });

    return await tx.employee.create({
      data: {
        ...rest,
        role: role, // Use the uppercased role ('TECHNICIAN', 'MANAGER', 'ADMIN')
        userId: user.id
      }
    });
  });
};

const getAllTimesheets = async () => {
  return await prisma.timesheet.findMany({
    include: { employee: true },
    orderBy: { date: 'desc' }
  });
};

const updateTimesheetStatus = async (id, status) => {
  return await prisma.timesheet.update({
    where: { id: parseInt(id) },
    data: { status }
  });
};

module.exports = { getAll, create, getAllTimesheets, updateTimesheetStatus };
