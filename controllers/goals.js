const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const prisma = require('../utils/prismaClient');

// @desc      Get ALL Goals
// @route     GET /api/v1/goals/
// @access    Private
exports.getGoals = asyncHandler(async (req, res, next) => {
  const goals = await prisma.goals.findMany();
  res.status(200).json({ success: true, data: goals });
});

// @desc      Get ALL Goals By User Id
// @route     GET /api/v1/goals/user/:user_id
// @access    Private
exports.getGoalsByUserId = asyncHandler(async (req, res, next) => {
  const id = req.params.user_id;

  const goals = await prisma.goals.findMany({
    where: {
      user_id: id,
    },
  });

  res.status(200).json({ success: true, data: goals });
});

// @desc      Create Goal
// @route     POST /api/v1/goals/
// @access    Private
exports.createGoal = asyncHandler(async (req, res, next) => {
  let data = req.body;
  data.time_of_completion = new Date();
  data.user_id = req.user.id;

  const newGoal = await prisma.goals.create({
    data: data,
  });

  res.status(200).json({ success: true, data: newGoal });
});

// @desc      Update Goal By ID
// @route     PUT /api/v1/goals/:goal_id
// @access    Private
exports.updateGoalByGoalId = asyncHandler(async (req, res, next) => {
  const id = req.params.goal_id;

  const updatedGoal = await prisma.goals.update({
    where: {
      id: id,
    },
    data: req.body,
  });

  res.status(200).json({ success: true, data: updatedGoal });
});

// @desc      Delete Goal By ID
// @route     DELETE /api/v1/goals/:goal_id
// @access    Private
exports.deleteGoalByGoalId = asyncHandler(async (req, res, next) => {
  const id = req.params.goal_id;

  const deletedGoal = await prisma.goals.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json({ success: true, data: {} });
});
