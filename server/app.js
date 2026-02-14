const express = require("express");
const app = express();
const cors = require("cors");
const MealsRouter = require("./Routes/mealsRouter.js");
const qs = require("qs");

app.use(cors());
app.use(express());
app.set("query parser", "extended");

app.use("/", MealsRouter)

module.exports = app;