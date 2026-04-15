const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    meals: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Products"
        },
        name: String,
        price: Number,
        quantity: {
            type: Number,
            min: [1, "Quantity can not be less than 1."]
        }
    }],
    orderDestiny: {
        method: {
            type: String,
            enum: ["Delivery", "Pickup"]
        },

        address: {
            street: String,
            floor: Number,
            doorPhone: Number 
        },

        pickupLocation: {
            branchName: String
        }
    }
});

const Orders = new mongoose.Model("Orders", OrderSchema);

module.exports = Orders;