const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Get ALL Fitness Logs
// @route     GET /api/v1/fitness/logs/
// @access    Private
exports.getFitnessLogs = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Get ALL Fitness Logs By User
// @route     GET /api/v1/fitness/logs/user/:user_id
// @access    Private
exports.getFitnessLogsByUserId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Create New Fitness Logs
// @route     POST /api/v1/fitness/logs/
// @access    Private
exports.createFitnessLog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Update Fitness Log By ID
// @route     PUT /api/v1/fitness/logs/:fitness_log_id
// @access    Private
exports.updatedFitnessLogByLogId = asyncHandler(async (req, res, next) => {
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
  res.status(200).json({ success: true });
});

// @desc      Get ALL Created Workouts By User Id
// @route     GET /api/v1/fitness/workouts/user/:user_id
// @access    Private
exports.getFitnessWorkoutsByUserId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Create Fitness Workout
// @route     POST /api/v1/fitness/logs/
// @access    Private
exports.createFitnessWorkout = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
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
