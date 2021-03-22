const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.getDietsByUserId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.createDiets = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.updateDietByDietId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.deleteDietByDietId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.getMealsByUserId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.createMeals = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.updateMealByMealId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.deleteMealByMealId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
