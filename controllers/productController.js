const productModel = require("../models/product")
const categoryModel = require("../models/category")
const cloudinary = require("../Utils/cloudinary")
const fs = require("fs")


exports.createProduct = async (req,res) =>{
    try {
        
        const {ProductName, Quantity, Description, Image, Category, Price} = req.body

        const category = await categoryModel.findById(Category);
    if (!category) {
        return res.status(400).json({ message: "Invalid category ID" });
    }

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

        const getAll = await productModel.find().populate("Category", "name description")
        if(!getAll || getAll.length === 0){
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
        const getOne = await productModel.findById(req.params.id).populate("Category", "name description");

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

exports.updateProduct = async (req,res) =>{
    try {

        const {Price, Category} = req.body

        if(!Price){
            return res.status(400).json({
                message:"Kindly Input Price as a number"
            })
        }

        if(!Category){
            return res.status(400).json({
                message:"Invalid Category ID"
            })
        }

    const update = await productModel.findByIdAndUpdate(req.params.id,
        {
            Price:Price
        },
        {new:true}
        ).populate("Category", "name description");
        
        if (!update) {
    return res.status(404).json({ message: "Product not found" });
    }

        res.status(200).json({
            message:"Product updated successfully",
            data:update
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


exports.getProductsByCategory = async (req, res) => {
    try {
    const { categoryId } = req.params;

    const products = await productModel
        .find({ Category: categoryId })
        .populate("Category", "name description");

    if (!products || products.length === 0) {
        return res.status(404).json({ message: "No products found for this category" });
    }

    res.status(200).json({
        message: "Products retrieved successfully",
        data: products
    });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};
