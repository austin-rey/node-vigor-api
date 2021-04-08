const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const prisma = require('../utils/prismaClient');

// @desc      Get Top Diets From Logs w/ Aggregated Data Based on User
// @route     GET /api/v1/diet/report/
// @access    Private
exports.getDietReport = asyncHandler(async (req, res, next) => {
  const id = req.params.user_id;

  const dietLogs = await prisma.diet_logs.groupBy({
    by: ['meal'],
    where: {
      user_id: id,
    },
    count: {
      meal: true,
    },
  });

  const dietIds = dietLogs.map((log) => {
    return log.meal;
  });

  const meals = await prisma.meals.findMany({
    where: {
      id: {
        in: dietIds,
      },
    },
  });

  const mealReport = meals.map((meal) => {
    return {
      id: meal.id,
      user_id: meal.user_id,
      created_at: meal.created_at,
      name: meal.name,
      description: meal.description,
      calories: parseInt(meal.calories),
      meal_count: dietLogs.find((log) => log.meal === meal.id).count.meal,
    };
  });

  res.status(200).json({ success: true, data: mealReport });
});

// @desc      Get ALL Diet Logs
// @route     GET /api/v1/diet/logs/
// @access    Private
exports.getDietLogs = asyncHandler(async (req, res, next) => {
  const dietLogs = await prisma.diet_logs.findMany({
    include: {
      user: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
      meals: {
        select: {
          id: true,
          name: true,
          description: true,
          calories: true,
          type: true,
        },
      },
    },
  });
  res.status(200).json({ success: true, data: dietLogs });
});

// @desc      Get ALL Diet Logs By User Id
// @route     GET /api/v1/diet/logs/user/:user_id
// @access    Private
exports.getDietLogsByUserId = asyncHandler(async (req, res, next) => {
  const id = req.params.user_id;

  const dietLogs = await prisma.diet_logs.findMany({
    where: {
      user_id: id,
    },
    include: {
      user: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
      meals: {
        select: {
          id: true,
          name: true,
          description: true,
          calories: true,
          type: true,
        },
      },
    },
  });

  res.status(200).json({ success: true, data: dietLogs });
});

// @desc      Create Diet Log
// @route     POST /api/v1/diet/logs/
// @access    Private
exports.createDiet = asyncHandler(async (req, res, next) => {
  let data = req.body;
  data.user_id = req.user.id;

  const newDietLog = await prisma.diet_logs.create({
    data: data,
    include: {
      user: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
      meals: {
        select: {
          id: true,
          name: true,
          description: true,
          calories: true,
          type: true,
        },
      },
    },
  });

  res.status(200).json({ success: true, data: newDietLog });
});

// @desc      Update Diet Log By Id
// @route     PUT /api/v1/diet/:diet_log_id
// @access    Private
exports.updateDietByDietId = asyncHandler(async (req, res, next) => {
  const id = req.params.diet_log_id;

  // Validate User Owns Resource
  const checkFitnessLog = await prisma.diet_logs.findUnique({
    where: {
      id: id,
    },
  });

  if (checkFitnessLog.user_id !== req.user.id) {
    return next(
      new ErrorResponse('Not authorized to update this resource', 403)
    );
  }

  const updatedDietLog = await prisma.diet_logs.update({
    where: {
      id: id,
    },
    include: {
      user: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
      meals: {
        select: {
          id: true,
          name: true,
          description: true,
          calories: true,
          type: true,
        },
      },
    },
    data: req.body,
  });

  res.status(200).json({ success: true, data: updatedDietLog });
});

// @desc      Delete Diet Log By Id
// @route     DELETE /api/v1/diet/:diet_log_id
// @access    Private
exports.deleteDietByDietId = asyncHandler(async (req, res, next) => {
  const id = req.params.diet_log_id;

  // Validate User Owns Resource
  // const checkFitnessLog = await prisma.diet_logs.findUnique({
  //   where: {
  //     id: id,
  //   },
  // });

  // if (checkFitnessLog.user_id !== req.user.id) {
  //   return next(
  //     new ErrorResponse('Not authorized to update this resource', 403)
  //   );
  // }

  const deletedDietLog = await prisma.diet_logs.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json({ success: true, data: {} });
});

// @desc      Get ALL Meals
// @route     GET /api/v1/diet/meals/
// @access    Private
exports.getMeals = asyncHandler(async (req, res, next) => {
  const meals = await prisma.meals.findMany({
    include: {
      user: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
    },
  });
  res.status(200).json({ success: true, data: meals });
});

// @desc      Get ALL Meals By User Id
// @route     GET /api/v1/diet/meals/user/:user_id
// @access    Private
exports.getMealsByUserId = asyncHandler(async (req, res, next) => {
  const id = req.params.user_id;

  const meals = await prisma.meals.findMany({
    where: {
      user_id: id,
    },
    include: {
      user: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
    },
  });

  res.status(200).json({ success: true, data: meals });
});

// @desc      Create New Meal
// @route     POST /api/v1/diet/meals/
// @access    Private
exports.createMeal = asyncHandler(async (req, res, next) => {
  let data = req.body;
  data.user_id = req.user.id;

  const newMeal = await prisma.meals.create({
    data: data,
    include: {
      user: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
    },
  });

  res.status(201).json({ success: true, data: newMeal });
});

// @desc      Update Meal By Id
// @route     PUT /api/v1/diet/meals/:meal_id
// @access    Private
exports.updateMealByMealId = asyncHandler(async (req, res, next) => {
  const id = req.params.meal_id;

  // Validate User Owns Resource
  const checkMeal = await prisma.meals.findUnique({
    where: {
      id: id,
    },
  });

  if (checkMeal.user_id !== req.user.id) {
    return next(
      new ErrorResponse('Not authorized to update this resource', 403)
    );
  }

  const updatedMeal = await prisma.meals.update({
    where: {
      id: id,
    },
    include: {
      user: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
    },
    data: req.body,
  });

  res.status(200).json({ success: true, data: updatedMeal });
});

// @desc      Delete Meal By Id
// @route     DELETE /api/v1/diet/meals/:meal_id
// @access    Private
exports.deleteMealByMealId = asyncHandler(async (req, res, next) => {
  const id = req.params.meal_id;

  // Validate User Owns Resource
  const checkMeal = await prisma.meals.findUnique({
    where: {
      id: id,
    },
  });

  if (checkMeal.user_id !== req.user.id) {
    return next(
      new ErrorResponse('Not authorized to update this resource', 403)
    );
  }

  const deletedMeal = await prisma.meals.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json({ success: true, data: {} });
});
