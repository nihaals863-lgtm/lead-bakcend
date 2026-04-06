const express = require('express');
const router = express.Router();
const employeesController = require('./employees.controller');
const { authenticate } = require('../../middlewares/auth');
const { authorize } = require('../../middlewares/role');

router.get('/', authenticate, authorize(['ADMIN', 'MANAGER']), employeesController.getAll);
router.post('/', authenticate, authorize(['ADMIN', 'MANAGER']), employeesController.create);
router.get('/timesheets', authenticate, authorize(['ADMIN', 'MANAGER']), employeesController.getAllTimesheets);
router.patch('/timesheets/:id/status', authenticate, authorize(['ADMIN', 'MANAGER']), employeesController.updateTimesheetStatus);

module.exports = router;
