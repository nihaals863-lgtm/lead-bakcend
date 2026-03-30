const express = require('express');
const router = express.Router();
const ctrl = require('./materials.controller');
const { authenticate } = require('../../middlewares/auth');

router.get('/pricing', authenticate, ctrl.getPricingResults);

module.exports = router;
