const express = require('express');
const router = express.Router();
// Todo auth middleware
const {
  getFitnessLogsByUserId,
  createFitnessLog,
  updatedFitnessLogByLogId,
  deleteFitnessLogByLogId,
  getFitnessWorkouts,
  createFitnessWorkout,
  updateFitnessWorkoutByWorkoutId,
  deleteFitnessWorkoutByWorkoutId,
} = require('../controllers/fitness');

const router = express.Router();

router.route('/logs/').post(createFitnessLog).get(getFitnessLogsByUserId);
router
  .route('/logs/:fitness_log_id')
  .put(updatedFitnessLogByLogId)
  .delete(deleteFitnessLogByLogId);

router.route('/workouts').get(getFitnessWorkouts).post(createFitnessWorkout);
router
  .route('/workouts/:workout_id')
  .put(updateFitnessWorkoutByWorkoutId)
  .delete(deleteFitnessWorkoutByWorkoutId);
