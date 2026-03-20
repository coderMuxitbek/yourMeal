const express = require("express");
const router = express.Router();
const MealsController = require("../Controllers/mealsController.js");

router.get("/", MealsController.GetMeals);
router.get("/prod/:id", MealsController.GetMeal);

module.exports = router;