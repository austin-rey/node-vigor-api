const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Get ALL Goals
// @route     GET /api/v1/goals/
// @access    Private
exports.getGoals = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Get ALL Goals By User Id
// @route     GET /api/v1/goals/user/:user_id
// @access    Private
exports.getGoalsByUserId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Create Goal
// @route     POST /api/v1/goals/
// @access    Private
exports.createGoal = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Update Goal By ID
// @route     PUT /api/v1/goals/:goal_id
// @access    Private
exports.updateGoalByGoalId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Delete Goal By ID
// @route     DELETE /api/v1/goals/:goal_id
// @access    Private
exports.deleteGoalByGoalId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
