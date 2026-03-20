const mongoose = require("mongoose");

const cartMeals = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    },
    futureOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        unique: false
    },
    qty: {
        type: Number,
        unique: false
    }
});

exports.Carts = mongoose.model("Carts", cartMeals);