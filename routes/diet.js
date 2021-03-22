const express = require('express');
// Todo auth middleware
const {
  getDietLogs,
  createDiet,
  updateDietByDietId,
  deleteDietByDietId,
  getMeals,
  createMeal,
  updateMealByMealId,
  deleteMealByMealId,
} = require('../controllers/diet');

const router = express.Router();

router.route('/logs/').get(getDietLogs).post(createDiet);
router
  .route('/logs/:diet_log_id')
  .put(updateDietByDietId)
  .delete(deleteDietByDietId);

router.route('/meals/').get(getMeals).post(createMeal);
router
  .route('/meals/:meal_id')
  .put(updateMealByMealId)
  .delete(deleteMealByMealId);

module.exports = router;
