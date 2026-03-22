const express = require("express");
const router = express.Router();
const CartControllers = require("../Controllers/cartControllers.js");
const AuthControllers = require("../Controllers/authControllers.js");

router.get("/", AuthControllers.Protect, CartControllers.GetCartMeals);
router.post("/", AuthControllers.Protect, CartControllers.AddToCart);
router.delete("/:id", AuthControllers.Protect, CartControllers.RemoveCartProduct);

module.exports = router;