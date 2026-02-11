const productModel = require("../models/product")


exports.createProduct = async (req,res) =>{
    try {
        const {ProductName, Quantity, Description, Image, Category, Price} = req.body

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