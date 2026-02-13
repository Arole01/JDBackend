const productModel = require("../models/product")
const cloudinary = require("../Utils/cloudinary")
const fs = require("fs")


exports.createProduct = async (req,res) =>{
    try {

        console.log("req.body:", req.body); console.log("req.file:", req.file);
        
        const {ProductName, Quantity, Description, Image, Category, Price} = req.body

        const uploadImg = await cloudinary.uploader.upload(req.file.path)
        const newProduct = await productModel.create({
            ProductName, 
            Quantity, 
            Description, 
            Image:uploadImg.secure_url, 
            Category, 
            Price
        })

        
        fs.unlinkSync(req.file.path)
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