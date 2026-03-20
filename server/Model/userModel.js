const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is a required field!"]
    },
    email: {
        type: String,
        required: [true, "Email is a required field!"]
    },
    password: {
        type: String,
        required: [true, "Password is a required field!"]
    },
    address: String,
    mealsInCart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    }]
});

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 12);
})

exports.Users = mongoose.model("Users", userSchema);