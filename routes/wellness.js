const express = require('express');
const {
  getWellnessLogs,
  createWellnessLog,
  updateWellnessLogByLogId,
  deleteWellnessLogByLogId,
} = require('../controllers/wellness');
const router = express.Router();

router.route('/').get(getWellnessLogs).post(createWellnessLog);
router
  .route('/:wellness_id')
  .put(updateWellnessLogByLogId)
  .delete(deleteWellnessLogByLogId);

module.exports = router;
