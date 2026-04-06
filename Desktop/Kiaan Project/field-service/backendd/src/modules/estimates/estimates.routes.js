const express = require('express');
const router = express.Router();
const estimatesController = require('./estimates.controller');
const { authenticate } = require('../../middlewares/auth');

router.get('/', authenticate, estimatesController.getAll);
router.post('/', authenticate, estimatesController.create);
router.patch('/:id', authenticate, estimatesController.update);
router.post('/:id/approve', authenticate, estimatesController.approve);
router.post('/:id/convert-to-invoice', authenticate, estimatesController.convertToInvoice);

module.exports = router;
