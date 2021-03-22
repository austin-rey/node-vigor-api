const express = require('express');
const {
  getWellnessLogs,
  getWellnessLogsByUserId,
  createWellnessLog,
  updateWellnessLogByLogId,
  deleteWellnessLogByLogId,
} = require('../controllers/wellness');
const router = express.Router();

router.route('/user/:user_id').get(getWellnessLogsByUserId);

router.route('/').get(getWellnessLogs).post(createWellnessLog);

router
  .route('/:wellness_id')
  .put(updateWellnessLogByLogId)
  .delete(deleteWellnessLogByLogId);

module.exports = router;
