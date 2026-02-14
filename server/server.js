const express = require("express");

const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});

const app = require("./app.js");
const mongoose = require("mongoose");

mongoose.connect(process.env.CONN_STR).then(() => {
    console.log("DB connection successful!");
}).catch((err) => {
    console.log(err.message);
})

app.use(express.json());
mongoose.set('debug', true);

app.listen(8000, () => {
    console.log("Server has started...");
})