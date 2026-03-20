const express = require("express");
const router = express.Router();
const CartControllers = require("../Controllers/cartControllers.js");
const AuthControllers = require("../Controllers/authControllers.js");

router.get("/", CartControllers.GetCartMeals);
router.post("/", AuthControllers.Protect, CartControllers.AddToCart);

module.exports = router;