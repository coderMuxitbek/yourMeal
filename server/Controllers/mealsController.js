const mongoose = require("mongoose");
const { Products, Carts } = require("../Model/mealModel.js");
const ApiFeatures = require("../Utils/ApiFeatures.js");

exports.GetMeals = async (req, res) => {
    try {
        const features = new ApiFeatures(Products.find(), req.query).sort().filter();
        const meals = await features.queryObj;

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

exports.GetMeal = async (req, res, next) => {    
    try {        
        const meals = await Products.findById(req.params.id);        

        res.status(200).json({
            status: "success",
            meals
        });

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}

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

