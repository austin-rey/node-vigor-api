const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.getFitnessLogsByUserId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.createFitnessLog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.updatedFitnessLogByLogId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.deleteFitnessLogByLogId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.getFitnessWorkouts = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.createFitnessWorkout = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.updateFitnessWorkoutByWorkoutId = asyncHandler(
  async (req, res, next) => {
    res.status(200).json({ success: true });
  }
);

exports.deleteFitnessWorkoutByWorkoutId = asyncHandler(
  async (req, res, next) => {
    res.status(200).json({ success: true });
  }
);
