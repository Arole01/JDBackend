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

exports.getAllProducts = async (req,res) =>{
    try {

        const getAll = await productModel.find()
        if(!getAll){
            return res.status(400).json({
                message: `No Product Found`
            })
        }

        res.status(200).json({
            message:"All product retrieved",
            data:getAll
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


exports.getAproduct = async (req,res) =>{
    try {
        const getOne = await productModel.findById(req.params.id)

        if(!getOne){
            return res.status(400).json({
                message: `No Product Found`
            })
        }
        
        res.status(200).json({
            message:"Product retrieved",
            data:getOne
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}