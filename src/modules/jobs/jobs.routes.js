const express = require('express');
const router = express.Router();
const jobsController = require('./jobs.controller');
const { authenticate } = require('../../middlewares/auth');

router.get('/', authenticate, jobsController.getAll);
router.get('/:id', authenticate, jobsController.getById);
router.post('/', authenticate, jobsController.create);
router.put('/:id', authenticate, jobsController.update);
router.put('/:id/status', authenticate, jobsController.updateStatus);
router.patch('/:id/status', authenticate, jobsController.updateStatus);
router.put('/:id/assign', authenticate, jobsController.assignTechnician);
router.post('/:id/notes', authenticate, jobsController.addNote);
router.post('/:id/photos', authenticate, jobsController.addPhoto);
router.post('/:id/files', authenticate, jobsController.addFile);
router.delete('/:id', authenticate, jobsController.remove);

module.exports = router;
