const mongoose = require("mongoose");

const mealSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is a required field"],
        unique: true,
        trim: true,
    },
    category: String,
    price: Number,
    weight: Number,
    img: String
});

const cartMeals = mongoose.Schema();

exports.Products = mongoose.model("products", mealSchema);
exports.Carts = mongoose.model("carts", cartMeals);
