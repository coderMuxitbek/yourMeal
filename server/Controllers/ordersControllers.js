const Orders = require("../Model/ordersModel.js");

exports.Order = async (req, res) => {
    try {
        const createdOrder = await Orders.create(req.body);

        req.status(201).json({
            status: "success",
            createdOrder,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}  