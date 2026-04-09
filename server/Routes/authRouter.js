const express = require("express");
const router = express.Router();
const AuthControllers = require("../Controllers/authControllers.js");

router.post("/", AuthControllers.SignUp);
router.delete("/", AuthControllers.Protect, AuthControllers.LogOut);

module.exports = router;