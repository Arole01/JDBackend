const { required } = require("joi")
const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
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
    },
    Style: {
        type: String,
        enum: ["Retro", "Club", "National Team", "Kids", "Baseball", "Basketball", ], default: "Club"
    }
}, {timestamps: true})

const productModel = mongoose.model("Product", productSchema)

module.exports = productModel