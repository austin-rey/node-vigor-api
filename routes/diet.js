const express = require('express');
const { protect, authorize } = require('../middleware/auth');

const {
  getDietLogs,
  getDietReport,
  getDietLogsByUserId,
  createDiet,
  updateDietByDietId,
  deleteDietByDietId,
  getMeals,
  getMealsByUserId,
  createMeal,
  updateMealByMealId,
  deleteMealByMealId,
} = require('../controllers/diet');

const router = express.Router();

router.route('/report/').get(protect, getDietReport);

router.route('/logs/user/:user_id').get(protect, getDietLogsByUserId);

router.route('/logs/').get(protect, getDietLogs).post(protect, createDiet);

router
  .route('/logs/:diet_log_id')
  .put(protect, updateDietByDietId)
  .delete(protect, deleteDietByDietId);

router.route('/meals/user/:user_id').get(protect, getMealsByUserId);

router.route('/meals/').get(protect, getMeals).post(protect, createMeal);

router
  .route('/meals/:meal_id')
  .put(protect, updateMealByMealId)
  .delete(protect, deleteMealByMealId);

module.exports = router;
