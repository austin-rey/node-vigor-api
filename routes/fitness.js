const express = require('express');
// Todo auth middleware
const {
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

router.route('/logs/user/:user_id').get(getFitnessLogsByUserId);

router.route('/logs/').post(createFitnessLog).get(getFitnessLogs);

router
  .route('/logs/:fitness_log_id')
  .put(updateFitnessLogByLogId)
  .delete(deleteFitnessLogByLogId);

router.route('/workouts/user/:user_id').get(getFitnessWorkoutsByUserId);

router.route('/workouts').get(getFitnessWorkouts).post(createFitnessWorkout);

router
  .route('/workouts/:workout_id')
  .put(updateFitnessWorkoutByWorkoutId)
  .delete(deleteFitnessWorkoutByWorkoutId);

module.exports = router;
