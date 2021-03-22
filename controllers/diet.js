const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Get ALL Diet Logs
// @route     GET /api/v1/diet/logs/
// @access    Private
exports.getDietLogs = asyncHandler(async (req, res, next) => {
  // Return all diet logs
  res.status(200).json({ success: true });
});

// @desc      Get ALL Diet Logs By User Id
// @route     GET /api/v1/diet/logs/user/:user_id
// @access    Private
exports.getDietLogsByUserId = asyncHandler(async (req, res, next) => {
  // Validate user id exists
  // Return all logs by id
  res.status(200).json({ success: true });
});

// @desc      Create Diet Log
// @route     POST /api/v1/diet/logs/
// @access    Private
exports.createDiet = asyncHandler(async (req, res, next) => {
  // Create new row in table
  // Return new entry and success message
  res.status(200).json({ success: true });
});

// @desc      Update Diet Log By Id
// @route     PUT /api/v1/diet/:diet_log_id
// @access    Private
exports.updateDietByDietId = asyncHandler(async (req, res, next) => {
  // Validate that the diet log exists
  // Validate that the user making the request created the log
  // Return updated entry and success message
  res.status(200).json({ success: true });
});

// @desc      Delete Diet Log By Id
// @route     DELETE /api/v1/diet/:diet_log_id
// @access    Private
exports.deleteDietByDietId = asyncHandler(async (req, res, next) => {
  // Validate diet log exists
  // Validate that the user making the request created the log
  // Return empty object and success message
  res.status(200).json({ success: true });
});

// @desc      Get ALL Meals
// @route     GET /api/v1/diet/meals/
// @access    Private
exports.getMeals = asyncHandler(async (req, res, next) => {
  // Return all meals
  res.status(200).json({ success: true });
});

// @desc      Get ALL Meals By User Id
// @route     GET /api/v1/diet/meals/user/:user_id
// @access    Private
exports.getMealsByUserId = asyncHandler(async (req, res, next) => {
  // Validate user id exists
  // Return all meals by id
  res.status(200).json({ success: true });
});

// @desc      Create New Meal
// @route     POST /api/v1/diet/meals/
// @access    Private
exports.createMeal = asyncHandler(async (req, res, next) => {
  // Create new row in table
  // Return new entry and success message
  res.status(200).json({ success: true });
});

// @desc      Update Meal By Id
// @route     PUT /api/v1/diet/meals/:meal_id
// @access    Private
exports.updateMealByMealId = asyncHandler(async (req, res, next) => {
  // Validate that the meal exists
  // Validate that the user making the request created the meal
  // Return updated entry and success message
  res.status(200).json({ success: true });
});

// @desc      Delete Meal By Id
// @route     DELETE /api/v1/diet/meals/:meal_id
// @access    Private
exports.deleteMealByMealId = asyncHandler(async (req, res, next) => {
  // Validate meal exists
  // Validate that the user making the request created the meal
  // Return empty object and success message
  res.status(200).json({ success: true });
});
