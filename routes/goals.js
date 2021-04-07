const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const {
  getGoals,
  getGoalsByUserId,
  createGoal,
  updateGoalByGoalId,
  deleteGoalByGoalId,
} = require('../controllers/goals');
const router = express.Router();

router.route('/user/:user_id').get(protect, getGoalsByUserId);
router.route('/').get(protect, getGoals).post(protect, createGoal);
router
  .route('/:goal_id')
  .put(protect, updateGoalByGoalId)
  .delete(protect, deleteGoalByGoalId);

module.exports = router;
