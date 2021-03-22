const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.getGoalsByUserId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.createGoal = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true });
  });

exports.updateGoalByGoalId = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true });
});

exports.deleteGoalByGoalId = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true });
});
