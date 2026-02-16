const express = require("express");
const app = express();
const cors = require("cors");
const MealsRouter = require("./Routes/mealsRouter.js");
const qs = require("qs");
const path = require("path");

const _dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
    app.use(cors());
}
app.use(express());
app.set("query parser", "extended");
app.use("/", MealsRouter);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../client/dist")));

    app.get("/{*splat}", (req, res) => {
        res.sendFile(path.join(_dirname, "..client", "dist", "index.html"));
    })
}

module.exports = app;