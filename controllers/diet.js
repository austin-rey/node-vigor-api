const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.getDietLogs = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.createDiet = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.updateDietByDietId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.deleteDietByDietId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.getMeals = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.createMeal = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.updateMealByMealId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.deleteMealByMealId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
