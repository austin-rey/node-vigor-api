const express = require('express');
const {
  getGoals,
  createGoal,
  updateGoalByGoalId,
  deleteGoalByGoalId,
} = require('../controllers/goals');
const router = express.Router();

router.route('/').get(getGoals).post(createGoal);
router.route('/:post_id').put(updateGoalByGoalId).delete(deleteGoalByGoalId);

module.exports = router;
