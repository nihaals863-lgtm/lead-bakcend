const express = require('express');
const router = express.Router();
const reviewsController = require('./reviews.controller');
const { auth, adminOnly } = require('../../middlewares/auth');

router.get('/', auth, reviewsController.getAllReviews);
router.post('/', auth, reviewsController.createReview);
router.delete('/:id', auth, adminOnly, reviewsController.deleteReview);

module.exports = router;
