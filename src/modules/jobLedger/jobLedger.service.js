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

  const remainingBalance = totalDeposits - totalExpenses;

  return {
    jobId: parseInt(jobId),
    summary: {
      totalDeposits,
      totalExpenses,
      remainingBalance,
      overdrawn: remainingBalance < 0
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

  return {
    entry: formatEntry(entry),
    summary: ledgerData.summary
  };
};

module.exports = {
  getJobLedgerSummary,
  addLedgerEntry
};
