const {Users} = require("../Model/userModel.js");

exports.GetAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        console.log(Users);
        
        res.json({
            status: "success",
            users
        })
    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })
    }
}