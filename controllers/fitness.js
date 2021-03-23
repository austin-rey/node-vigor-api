const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const prisma = require('../utils/prismaClient');

// @desc      Get ALL Fitness Logs
// @route     GET /api/v1/fitness/logs/
// @access    Private
exports.getFitnessLogs = asyncHandler(async (req, res, next) => {
  const fitnessLogs = await prisma.fitness_logs.findMany();
  res.status(200).json({ success: true, data: fitnessLogs });
});

// @desc      Get ALL Fitness Logs By User
// @route     GET /api/v1/fitness/logs/user/:user_id
// @access    Private
exports.getFitnessLogsByUserId = asyncHandler(async (req, res, next) => {
  const id = req.params.user_id;

  const fitnessLogs = await prisma.fitness_logs.findMany({
    where: {
      user_id: id,
    },
  });

  res.status(200).json({ success: true, data: fitnessLogs });
});

// @desc      Create New Fitness Logs
// @route     POST /api/v1/fitness/logs/
// @access    Private
exports.createFitnessLog = asyncHandler(async (req, res, next) => {
  let data = req.body;
  data.created_at = new Date();
  data.date_of_workout = new Date();

  const newFitnessLog = await prisma.fitness_logs.create({
    data: data,
  });

  res.status(200).json({ success: true, data: newFitnessLog });
});

// @desc      Update Fitness Log By ID
// @route     PUT /api/v1/fitness/logs/:fitness_log_id
// @access    Private
exports.updatedFitnessLogByLogId = asyncHandler(async (req, res, next) => {
  // TODO
  // Check to see if log exists
  // Check that this resource was created by user making request
  res.status(200).json({ success: true });
});

// @desc      Delete Fitness Log By ID
// @route     DELETE /api/v1/fitness/logs/:fitness_log_id
// @access    Private
exports.deleteFitnessLogByLogId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Get ALL Created Workouts
// @route     GET /api/v1/fitness/workouts/
// @access    Private
exports.getFitnessWorkouts = asyncHandler(async (req, res, next) => {
  const workouts = await prisma.workouts.findMany();
  res.status(200).json({ success: true, data: workouts });
});

// @desc      Get ALL Created Workouts By User Id
// @route     GET /api/v1/fitness/workouts/user/:user_id
// @access    Private
exports.getFitnessWorkoutsByUserId = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.user_id);

  const workouts = await prisma.workouts.findMany({
    where: {
      user_id: id,
    },
  });

  res.status(200).json({ success: true, data: workouts });
});

// @desc      Create Fitness Workout
// @route     POST /api/v1/fitness/logs/
// @access    Private
exports.createFitnessWorkout = asyncHandler(async (req, res, next) => {
  const data = req.body;
  data.created_at = new Date();

  const newWorkout = await prisma.workouts.create({
    data: data,
  });

  res.status(200).json({ success: true, data: newWorkout });
});

// @desc      Update Fitness Workout By ID
// @route     PUT /api/v1/fitness/logs/:workout_id
// @access    Private
exports.updateFitnessWorkoutByWorkoutId = asyncHandler(
  async (req, res, next) => {
    res.status(200).json({ success: true });
  }
);

// @desc      Delete Fitness Workout By ID
// @route     DELETE /api/v1/fitness/logs/:workout_id
// @access    Private
exports.deleteFitnessWorkoutByWorkoutId = asyncHandler(
  async (req, res, next) => {
    res.status(200).json({ success: true });
  }
);
