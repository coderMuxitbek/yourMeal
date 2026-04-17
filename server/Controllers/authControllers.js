const { Users } = require("../Model/userModel.js");
const jwt = require("jsonwebtoken");
const ErrorClass = require("../Utils/ErrorClass.js");
const util = require("util");

exports.SignUp = async (req, res) => {
    try {
        const foundUser = await Users.findOne({ telephone: req.body.telephone });

        if (!foundUser) {
            const user = await Users.create(req.body);
        }
        
        const token = jwt.sign({ id: user._id },
            process.env.SECRET_STR,
            {
                expiresIn: process.env.LOGIN_EXPIRES
            });

        const options = {
            maxAge: process.env.LOGIN_EXPIRES,
            httpOnly: true,
            secure: true,
            sameSite: "none"
        }

        res.cookie("jwt", token, options);

        res.status(201).json({
            status: "success",
            token,
            user
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.LogOut = async (req, res) => {

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    }

    res.clearCookie("jwt", options);

    res.status(200).json({
        status: "success",
        message: "Logged out"
    })
}

exports.Protect = async (req, res, next) => {
    const testToken = req.headers.cookie;

    let token;
    if (testToken && testToken.startsWith("jwt=")) {
        token = testToken.split("=")[1];
    }

    if (!token) {
        next(new ErrorClass("You are not logged in!", 401));
    }

    let decodedToken;
    try {
        decodedToken = await util.promisify(jwt.verify)(token, process.env.SECRET_STR);
    } catch (error) {
        return next(new ErrorClass(error.message, 401))
    }


    const user = await Users.findById(decodedToken.id);

    if (!user) {
        next(new ErrorClass("User with the given token does not exist!", 401));
    }

    req.user = user;
    next();
}