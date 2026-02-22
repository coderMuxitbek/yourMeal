const express = require("express");
const router = express.Router();
const MealsController = require("../Controllers/mealsController.js");

router.get("/products", MealsController.GetMeals);
router.get("/cartMeals", MealsController.GetCartMeals);
router.get("/products/prod/:id", MealsController.GetMeal);

module.exports = router;