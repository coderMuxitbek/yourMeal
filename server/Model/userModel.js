const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: false
    },
    telephone: {
        type: Number,
    },
    address: {
        street: String,
        floor: Number,
        doorPhone: Number
    }
});

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 12);
})

exports.Users = mongoose.model("Users", userSchema);