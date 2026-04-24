const express = require("express");
const router = express.Router();
const AuthControllers = require("../Controllers/authControllers.js");
const OrdersControllers = require("../Controllers/ordersControllers.js");

router.post("/", AuthControllers.SignUp, OrdersControllers.CheckAddress);
router.delete("/", AuthControllers.Protect, AuthControllers.LogOut);

module.exports = router;