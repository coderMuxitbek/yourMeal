const mongoose = require("mongoose");
const { Carts, Products } = require("../Model/cartModel.js");
const ApiFeatures = require("../Utils/ApiFeatures.js");

exports.GetCartMeals = async (req, res) => {
    try {
        const user = req.user;
        const meals = (await Carts.find({ customer: user._id }).populate("product"));
        // const cartMeals = await Carts.find({ customer: user._id }).populate("_id");
        // const meals = cartMeals.map((item) => item._id);
        

        res.json({
            status: "success",
            meals
        })

    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })
    }
}

exports.AddToCart = async (req, res) => {
    try {
        const user = req.user;
        const cartMeal = await Carts.findOneAndUpdate({ product: req.body._id, customer: user._id }, { customer: user._id, $inc: { qty: 1 } }, { new: true, upsert: true });
        // user.mealsInCart.push(cartMeal.product); ////// THESE TWO LINES ARE WRONG
        // await user.save();                       ////// ThESE TWO LINES ARE WRONG

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

exports.RemoveCartProduct = async (req, res) => {
    try {
        const updatedMeal = await Carts.findOneAndUpdate({ _id: req.params.id }, { $inc: { qty: -1 } });

        if (updatedMeal.qty === 1) {
            await Carts.findByIdAndDelete(req.params.id);
        }

        res.status(204).json({
            status: "success",
        })
    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })
    }
}
