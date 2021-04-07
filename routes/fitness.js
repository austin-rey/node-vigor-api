const express = require('express');
const { protect, authorize } = require('../middleware/auth');

const {
  getFitnessReport,
  getFitnessLogs,
  getFitnessLogsByUserId,
  createFitnessLog,
  updateFitnessLogByLogId,
  deleteFitnessLogByLogId,
  getFitnessWorkouts,
  getFitnessWorkoutsByUserId,
  createFitnessWorkout,
  updateFitnessWorkoutByWorkoutId,
  deleteFitnessWorkoutByWorkoutId,
} = require('../controllers/fitness');

const router = express.Router();

router.route('/report/').get(protect, getFitnessReport);

router.route('/logs/user/:user_id').get(protect, getFitnessLogsByUserId);

router
  .route('/logs/')
  .post(protect, createFitnessLog)
  .get(protect, getFitnessLogs);

router
  .route('/logs/:fitness_log_id')
  .put(protect, authorize, updateFitnessLogByLogId)
  .delete(protect, deleteFitnessLogByLogId);

router
  .route('/workouts/user/:user_id')
  .get(protect, getFitnessWorkoutsByUserId);

router
  .route('/workouts')
  .get(protect, getFitnessWorkouts)
  .post(protect, createFitnessWorkout);

router
  .route('/workouts/:workout_id')
  .put(protect, authorize, updateFitnessWorkoutByWorkoutId)
  .delete(protect, deleteFitnessWorkoutByWorkoutId);

module.exports = router;
