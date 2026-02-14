const mongoose = require("mongoose");
const Products = require("../Model/mealModel.js");

class ApiFeatures {
    constructor(queryObj, query) {
        this.queryObj = queryObj;
        this.query = query;
    }

    filter() {
        const queryPropsRemoved = ["sort", "limit", "page", "fields"];
        const myQueryStr = { ...this.query }
        queryPropsRemoved.forEach((w) => delete myQueryStr[w]);
        
        this.queryObj = this.queryObj.find(myQueryStr);
        return this;
    }

    sort() {
        if (this.query.sort) {
            const sortQuery = this.query.sort.split(",").join(" ");
            this.queryObj = this.queryObj.sort(sortQuery);
        }
        return this;
    }
}

module.exports = ApiFeatures;