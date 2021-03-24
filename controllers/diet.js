const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const prisma = require('../utils/prismaClient');

// @desc      Get ALL Diet Logs
// @route     GET /api/v1/diet/logs/
// @access    Private
exports.getDietLogs = asyncHandler(async (req, res, next) => {
  const dietLogs = await prisma.diet_logs.findMany();
  res.status(200).json({ success: true, data: dietLogs });
});

// @desc      Get ALL Diet Logs By User Id
// @route     GET /api/v1/diet/logs/user/:user_id
// @access    Private
exports.getDietLogsByUserId = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.user_id);

  const dietLogs = await prisma.diet_logs.findMany({
    where: {
      user_id: id,
    },
  });

  res.status(200).json({ success: true, data: dietLogs });
});

// @desc      Create Diet Log
// @route     POST /api/v1/diet/logs/
// @access    Private
exports.createDiet = asyncHandler(async (req, res, next) => {
  let data = req.body;
  data.created_at = new Date();

  const newDietLog = await prisma.diet_logs.create({
    data: data,
  });

  res.status(200).json({ success: true, data: newDietLog });
});

// @desc      Update Diet Log By Id
// @route     PUT /api/v1/diet/:diet_log_id
// @access    Private
exports.updateDietByDietId = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.diet_log_id);

  const updatedDietLog = await prisma.diet_logs.update({
    where: {
      diet_log_id: id,
    },
    data: req.body,
  });

  res.status(200).json({ success: true, data: updatedDietLog });
});

// @desc      Delete Diet Log By Id
// @route     DELETE /api/v1/diet/:diet_log_id
// @access    Private
exports.deleteDietByDietId = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.diet_log_id);

  const deletedDietLog = await prisma.diet_logs.delete({
    where: {
      diet_log_id: id,
    },
  });

  res.status(200).json({ success: true, data: {} });
});

// @desc      Get ALL Meals
// @route     GET /api/v1/diet/meals/
// @access    Private
exports.getMeals = asyncHandler(async (req, res, next) => {
  const meals = await prisma.meals.findMany();
  res.status(200).json({ success: true, data: meals });
});

// @desc      Get ALL Meals By User Id
// @route     GET /api/v1/diet/meals/user/:user_id
// @access    Private
exports.getMealsByUserId = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.user_id);

  const meals = await prisma.meals.findMany({
    where: {
      user_id: id,
    },
  });

  res.status(200).json({ success: true, data: meals });
});

// @desc      Create New Meal
// @route     POST /api/v1/diet/meals/
// @access    Private
exports.createMeal = asyncHandler(async (req, res, next) => {
  let data = req.body;
  data.created_at = new Date();

  const newMeal = await prisma.meals.create({
    data: data,
  });

  res.status(200).json({ success: true, data: newMeal });
});

// @desc      Update Meal By Id
// @route     PUT /api/v1/diet/meals/:meal_id
// @access    Private
exports.updateMealByMealId = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.meal_id);

  const updatedMeal = await prisma.meals.update({
    where: {
      meal_id: id,
    },
    data: req.body,
  });

  res.status(200).json({ success: true, data: updatedMeal });
});

// @desc      Delete Meal By Id
// @route     DELETE /api/v1/diet/meals/:meal_id
// @access    Private
exports.deleteMealByMealId = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.meal_id);

  const deletedMeal = await prisma.meals.delete({
    where: {
      meal_id: id,
    },
  });

  res.status(200).json({ success: true, data: {} });
});
