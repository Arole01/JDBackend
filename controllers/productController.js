const productModel = require("../models/product")
const cloudinary = require("../Utils/cloudinary")


exports.createProduct = async (req,res) =>{
    try {
        const {ProductName, Quantity, Description, Image, Category, Price} = req.body

        const uploadImg = await cloudinary.uploader.upload()
        const newProduct = await productModel.create({
            ProductName, 
            Quantity, 
            Description, 
            Image, 
            Category, 
            Price
        })

        res.status(201).json({
            message: `Product created successfully`,
            data: newProduct
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}