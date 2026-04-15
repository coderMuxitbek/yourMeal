const express = require("express");
const router = express.Router();
const OrderControllers = require("../Controllers/ordersControllers.js");

router.post("/", OrderControllers.Order);

module.exports = router;