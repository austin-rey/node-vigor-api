const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const prisma = require('../utils/prismaClient');

// @desc      Get ALL Fitness Logs
// @route     GET /api/v1/fitness/logs/
// @access    Private
exports.getFitnessLogs = asyncHandler(async (req, res, next) => {
  const fitnessLogs = await prisma.fitness_logs.findMany({
    include: {
      user: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
      workouts: {
        select: {
          id: true,
          name: true,
          description: true,
        },
      },
    },
  });
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

  res.status(200).json({ success: true, data: fitnessLogs });
});

// @desc      Create New Fitness Logs
// @route     POST /api/v1/fitness/logs/
// @access    Private
exports.createFitnessLog = asyncHandler(async (req, res, next) => {
  let data = req.body;
  data.date_of_workout = new Date();
  data.user_id = req.user.id;

  const newFitnessLog = await prisma.fitness_logs.create({
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

  res.status(201).json({ success: true, data: newFitnessLog });
});

// @desc      Update Fitness Log By ID
// @route     PUT /api/v1/fitness/logs/:fitness_log_id
// @access    Private
exports.updateFitnessLogByLogId = asyncHandler(async (req, res, next) => {
  const id = req.params.fitness_log_id;

  // Validate that user owns this
  const updatedFitnessLog = await prisma.fitness_logs.update({
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

  res.status(200).json({ success: true, data: updatedFitnessLog });
});

// @desc      Delete Fitness Log By ID
// @route     DELETE /api/v1/fitness/logs/:fitness_log_id
// @access    Private
exports.deleteFitnessLogByLogId = asyncHandler(async (req, res, next) => {
  const id = req.params.fitness_log_id;

  const deletedFitnessLog = await prisma.fitness_logs.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json({ success: true, data: {} });
});

// @desc      Get ALL Created Workouts
// @route     GET /api/v1/fitness/workouts/
// @access    Private
exports.getFitnessWorkouts = asyncHandler(async (req, res, next) => {
  const workouts = await prisma.workouts.findMany({
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
  res.status(200).json({ success: true, data: workouts });
});

// @desc      Get ALL Created Workouts By User Id
// @route     GET /api/v1/fitness/workouts/user/:user_id
// @access    Private
exports.getFitnessWorkoutsByUserId = asyncHandler(async (req, res, next) => {
  const id = req.params.user_id;

  const workouts = await prisma.workouts.findMany({
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

  res.status(200).json({ success: true, data: workouts });
});

// @desc      Create Fitness Workout
// @route     POST /api/v1/fitness/workouts/
// @access    Private
exports.createFitnessWorkout = asyncHandler(async (req, res, next) => {
  const data = req.body;
  data.user_id = req.user.id;
  const newWorkout = await prisma.workouts.create({
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

  res.status(201).json({ success: true, data: newWorkout });
});

// @desc      Update Fitness Workout By ID
// @route     PUT /api/v1/fitness/workouts/:workout_id
// @access    Private
exports.updateFitnessWorkoutByWorkoutId = asyncHandler(
  async (req, res, next) => {
    const id = req.params.workout_id;

    const updatedWorkout = await prisma.workouts.update({
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

    res.status(200).json({ success: true, data: updatedWorkout });
  }
);

// @desc      Delete Fitness Workout By ID
// @route     DELETE /api/v1/fitness/workouts/:workout_id
// @access    Private
exports.deleteFitnessWorkoutByWorkoutId = asyncHandler(
  async (req, res, next) => {
    const id = req.params.workout_id;

    const deletedWorkout = await prisma.workouts.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ success: true, data: {} });
  }
);
