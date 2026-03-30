const materialsService = require('./materials.service');

const getPricingResults = async (req, res, next) => {
  try {
    const results = await materialsService.getMaterialPricing();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPricingResults
};
