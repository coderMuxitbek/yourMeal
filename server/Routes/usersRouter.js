const express = require("express");
const router = express.Router();
const usersControllers = require("../Controllers/usersControllers.js");

router.route("/").get(usersControllers.GetAllUsers);

module.exports = router;