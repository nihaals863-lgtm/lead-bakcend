const integrationsService = require('./integrations.service');

const getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await integrationsService.getAllSuppliers();
    res.json(suppliers);
  } catch (error) {
    next(error);
  }
};

const createIntegration = async (req, res, next) => {
  try {
    const integration = await integrationsService.upsertIntegration(req.body);
    res.json(integration);
  } catch (error) {
    next(error);
  }
};

const updateIntegration = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const integration = await integrationsService.updateStatus(id, status);
    res.json(integration);
  } catch (error) {
    next(error);
  }
};

const removeIntegration = async (req, res, next) => {
  try {
    const { id } = req.params;
    await integrationsService.deleteIntegration(id);
    res.json({ message: 'Integration removed' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSuppliers,
  createIntegration,
  updateIntegration,
  removeIntegration
};
