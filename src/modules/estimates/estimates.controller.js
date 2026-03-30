const estimatesService = require('./estimates.service');

const getAll = async (req, res, next) => {
  try {
    const estimates = await estimatesService.getAll(req.user);
    res.json(estimates);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const estimate = await estimatesService.create(req.body);
    res.status(201).json(estimate);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const estimate = await estimatesService.update(req.params.id, req.body);
    res.json(estimate);
  } catch (error) {
    next(error);
  }
};

const approve = async (req, res, next) => {
  try {
    const estimate = await estimatesService.approve(req.params.id);
    res.json(estimate);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, create, update, approve };
