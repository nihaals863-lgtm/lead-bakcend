const prisma = require('../../config/db');

/**
 * Convert Decimal to Number for JSON serialization and map field names for frontend
 */
const formatEntry = (entry) => ({
  ...entry,
  amount: Number(entry.amount),
  date: entry.transactionDate ? new Date(entry.transactionDate).toLocaleDateString() : 'N/A',
  reference: entry.referenceNumber || '-'
});

/**
 * Calculate financial summary for a specific job
 */
const getJobLedgerSummary = async (jobId) => {
  const job = await prisma.job.findUnique({
    where: { id: parseInt(jobId) },
    include: { estimate: true }
  });

  const ledgerEntries = await prisma.jobLedger.findMany({
    where: { jobId: parseInt(jobId) },
    orderBy: { transactionDate: 'desc' }
  });

  const totalDeposits = ledgerEntries
    .filter(e => e.type === 'CREDIT' && e.category === 'DEPOSIT')
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const totalExpenses = ledgerEntries
    .filter(e => e.type === 'DEBIT')
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const totalMaterial = ledgerEntries
    .filter(e => e.type === 'DEBIT' && e.category === 'MATERIAL')
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const totalLabor = ledgerEntries
    .filter(e => e.type === 'DEBIT' && e.category === 'LABOR')
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const totalJobPrice = job?.estimate?.totalAmount ? Number(job.estimate.totalAmount) : 0;
  const remainingInJob = totalJobPrice - totalDeposits;
  const remainingCash = totalDeposits - totalExpenses;

  return {
    jobId: parseInt(jobId),
    jobTitle: job?.title,
    totalJobPrice,
    summary: {
      totalReceived: totalDeposits,
      totalSpent: totalExpenses,
      totalMaterial,
      totalLabor,
      remainingInJob, // Amount customer still needs to pay for the job
      remainingCash, // Amount left from what has been received
      overdrawn: remainingCash < 0
    },
    entries: ledgerEntries.map(formatEntry)
  };
};


/**
 * Add a new financial entry (Deposit or Expense)
 */
const addLedgerEntry = async (jobId, data, userId) => {
  // Validate Job Exists
  const job = await prisma.job.findUnique({
    where: { id: parseInt(jobId) }
  });

  if (!job) {
    throw new Error('Job not found');
  }

  // Create Entry
  const entry = await prisma.jobLedger.create({
    data: {
      jobId: parseInt(jobId),
      type: data.type,
      category: data.category,
      amount: data.amount,
      paymentMethod: data.paymentMethod || null,
      referenceNumber: data.referenceNumber || null,
      note: data.note || null,
      createdById: userId,
      transactionDate: data.date ? new Date(data.date) : new Date()
    }
  });

  // Calculate Refresh Summary
  const ledgerData = await getJobLedgerSummary(jobId);

  // Trigger Alert if overdrawn
  if (ledgerData.summary.remainingBalance <= 0) {
    try {
      const notificationService = require('../notifications/notifications.service');
      const adminUsers = await prisma.user.findMany({ where: { role: 'ADMIN' } });
      
      for (const admin of adminUsers) {
        await notificationService.createNotification(admin.id, {
          type: 'OVERDRAWN_ALERT',
          title: 'Job Balance Alert',
          message: `Job #${job.id} (${job.title}) has a zero or negative balance ($${ledgerData.summary.remainingBalance}).`,
          link: `/dashboard/jobs/${job.id}/financials`
        });
      }
    } catch (error) {
      console.error('Failed to send overdrawn alert:', error);
    }
  }

  return {
    entry: formatEntry(entry),
    summary: ledgerData.summary
  };
};

const getAllJobSummaries = async () => {
  const allJobs = await prisma.job.findMany({
    include: {
      customer: true,
      jobLedgerEntries: true
    }
  });

  return allJobs.map(job => {
    const ledgerEntries = job.jobLedgerEntries;
    
    // Convert Decimal to Number once
    const entries = ledgerEntries.map(e => ({
      ...e,
      amount: Number(e.amount)
    }));

    const totalDeposits = entries
      .filter(e => e.type === 'CREDIT' && e.category === 'DEPOSIT')
      .reduce((sum, e) => sum + e.amount, 0);

    const totalExpenses = entries
      .filter(e => e.type === 'DEBIT')
      .reduce((sum, e) => sum + e.amount, 0);

    const totalLabor = entries
      .filter(e => e.type === 'DEBIT' && e.category === 'LABOR')
      .reduce((sum, e) => sum + e.amount, 0);

    const remainingBalance = totalDeposits - totalExpenses;

    return {
      jobId: job.id,
      jobTitle: job.title,
      customerName: job.customer.name,
      status: job.status,
      summary: {
        totalDeposits,
        depositCount: entries.filter(e => e.type === 'CREDIT' && e.category === 'DEPOSIT').length,
        totalExpenses,
        totalLabor,
        remainingBalance,
        overdrawn: remainingBalance < 0
      }
    };
  });
};

module.exports = {
  getJobLedgerSummary,
  addLedgerEntry,
  getAllJobSummaries
};
