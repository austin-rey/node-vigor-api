const express = require('express');
const {
  getGoals,
  getGoalsByUserId,
  createGoal,
  updateGoalByGoalId,
  deleteGoalByGoalId,
} = require('../controllers/goals');
const router = express.Router();

router.route('/user/:user_id').get(getGoalsByUserId);
router.route('/').get(getGoals).post(createGoal);
router.route('/:goal_id').put(updateGoalByGoalId).delete(deleteGoalByGoalId);

module.exports = router;
