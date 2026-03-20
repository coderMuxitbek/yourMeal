const express = require("express");
const router = express.Router();
const authControllers = require("../Controllers/authControllers.js");

router.post("/", authControllers.SignUp);

module.exports = router;