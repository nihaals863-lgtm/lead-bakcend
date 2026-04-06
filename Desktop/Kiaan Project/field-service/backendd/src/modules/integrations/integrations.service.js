const prisma = require('../../config/db');

const getAllSuppliers = async () => {
  const providers = await prisma.integration.findMany({
    where: { category: 'SUPPLIER' }
  });
  
  // Seed defaults if nothing is found
  if (providers.length === 0) {
    const defaultSuppliers = [
      { name: "Lowe's", status: 'Connected', icon: '🏪', desc: 'Building materials & supplies', category: 'SUPPLIER' },
      { name: "Home Depot", status: 'Connected', icon: '🔧', desc: 'Tools & hardware supplies', category: 'SUPPLIER' },
      { name: "Ferguson", status: 'Not Connected', icon: '🚿', desc: 'Plumbing & HVAC supplies', category: 'SUPPLIER' }
    ];
    
    await prisma.integration.createMany({
      data: defaultSuppliers,
      skipDuplicates: true
    });
    
    return await prisma.integration.findMany({
      where: { category: 'SUPPLIER' }
    });
  }
  
  return providers;
};

const upsertIntegration = async (data) => {
  return await prisma.integration.upsert({
    where: { name: data.name },
    update: {
      status: data.status,
      desc: data.desc,
      icon: data.icon,
      config: data.config
    },
    create: {
      name: data.name,
      category: data.category,
      status: data.status,
      desc: data.desc,
      icon: data.icon,
      config: data.config
    }
  });
};

const deleteIntegration = async (id) => {
  return await prisma.integration.delete({
    where: { id: parseInt(id) }
  });
};

const updateStatus = async (id, status) => {
  return await prisma.integration.update({
    where: { id: parseInt(id) },
    data: { status }
  });
};

module.exports = {
  getAllSuppliers,
  upsertIntegration,
  deleteIntegration,
  updateStatus
};
