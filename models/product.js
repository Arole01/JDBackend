const { required } = require("joi")
const Mongoose = require("mongoose")


const productSchema = new Mongoose.Schema({
    ProductName: {
        type: String,
    },

    Quantity:{
        type: Number,
    },

    Description: {
        type: String,
    },

    Image: {
        type: String,
    },

    Category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    Price: {
        type: String,
    }


}, {timestamps: true})

const productModel = Mongoose.model("Product", productSchema)

module.exports = productModel