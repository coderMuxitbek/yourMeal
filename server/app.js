const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const MealsRouter = require("./Routes/mealsRouter.js");
const AuthRouter = require("./Routes/authRouter.js");
const CartRouter = require("./Routes/cartRouter.js");
const UsersRouter = require("./Routes/usersRouter.js");
const qs = require("qs");
const path = require("path");

const _dirname = path.resolve();

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.set("query parser", "extended");
app.use("/yourMeal/products", MealsRouter);
app.use("/yourMeal/auth", AuthRouter);
app.use("/yourMeal/cartMeals", CartRouter);
app.use("/yourMeal/users", UsersRouter);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../client/dist")));

    app.get("/{*splat}", (req, res) => {
        res.sendFile(path.join(_dirname, "..client", "dist", "index.html"));
    })
}

module.exports = app;