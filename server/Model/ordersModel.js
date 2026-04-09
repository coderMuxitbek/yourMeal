const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    meals: {
        type: [Object]
    },
    district: {
        type: String,
        enum: ["Olmazor", "Yunusobod", "Mirzo Ulug'bek", "Chilonzor", "Mirobod"],
        required: true
    },
    address: String
});

const Orders = new mongoose.Model("Orders", OrderSchema);

module.exports = Orders;