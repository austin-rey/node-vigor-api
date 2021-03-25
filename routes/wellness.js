const express = require('express');
const { protect, authorize } = require('../middleware/auth');

const {
  getWellnessLogs,
  getWellnessLogsByUserId,
  createWellnessLog,
  updateWellnessLogByLogId,
  deleteWellnessLogByLogId,
} = require('../controllers/wellness');
const router = express.Router();

router.route('/user/:user_id').get(protect, getWellnessLogsByUserId);

router
  .route('/')
  .get(protect, getWellnessLogs)
  .post(protect, createWellnessLog);

router
  .route('/:wellness_id')
  .put(protect, updateWellnessLogByLogId)
  .delete(protect, deleteWellnessLogByLogId);

module.exports = router;
