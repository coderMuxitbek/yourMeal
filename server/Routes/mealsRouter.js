const express = require("express");
const router = express.Router();
const GetMeals = require("../Controllers/mealsController.js");
const MealsController = require("../Controllers/mealsController.js");

router.get("/yourMeal/products", MealsController.GetMeals);
router.get("/yourMeal/cartMeals", MealsController.GetCartMeals);

module.exports = router;