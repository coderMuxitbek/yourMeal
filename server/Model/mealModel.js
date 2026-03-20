const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is a required field"],
        unique: true,
        trim: true,
    },
    description: String,
    ingredients: [String],
    calories: Number,
    category: String,
    price: Number,
    weight: Number,
    img: String
});

exports.Products = mongoose.model("Products", mealSchema);
