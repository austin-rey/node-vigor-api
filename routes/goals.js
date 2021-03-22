const express = require('express');
const {
  getGoalsByUserId,
  createGoal,
  updateGoalByGoalId,
  deleteGoalByGoalId,
} = require('../controllers/goals');
const router = express.Router;

router.route('/').get(getGoalsByUserId).post(createGoal);
router.route('/:post_id').put(updateGoalByGoalId).delete(deleteGoalByGoalId);
