const express = require('express');
const router = express.Router();
// Todo auth middleware
const {
  getDietsByUserId,
  createDiets,
  updateDietByDietId,
  deleteDietByDietId,
  getMealsByUserId,
  createMeals,
  updateMealByMealId,
  deleteMealByMealId,
} = require('../controllers/diet');

const router = express.Router();

router.route('/logs/').get(getDietsByUserId).post(createDiets);
router
  .route('/logs/:diet_log_id')
  .put(updateDietByDietId)
  .delete(deleteDietByDietId);

router.route('/meals/').get(getMealsByUserId).post(createMeals);
router
  .route('/meals/:meal_id')
  .put(updateMealByMealId)
  .delete(deleteMealByMealId);
