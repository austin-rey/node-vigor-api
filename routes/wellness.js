const express = require('express');
const {
  getWellnessLogByUserId,
  createWellnessLog,
  updateWellnessLogByLogId,
  deleteWellnessLogByLogId,
} = require('../controllers/wellness');
const router = express.Router;
router.route('/').get(getWellnessLogByUserId).post(createWellnessLog);
router
  .route('/:wellness_id')
  .put(updateWellnessLogByLogId)
  .delete(deleteWellnessLogByLogId);
