const mongoose = require("mongoose");
const { Carts } = require("../Model/cartModel.js");
const ApiFeatures = require("../Utils/ApiFeatures.js");

exports.GetCartMeals = async (req, res) => {
    try {
        const meals = await Carts.find();

        res.status(200).json({
            status: "success",
            meals
        })

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.AddToCart = async (req, res) => {
    try {
        const user = req.user;
        const cartMeal = await Carts.create({ _id: req.body._id, futureOwner: user._id, qty: 1});
        // user.mealsInCart.push(cartMeal._id);
        // await user.save();

        res.status(201).json({
            status: "success",
            data: cartMeal
        });

    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })
    }
}
