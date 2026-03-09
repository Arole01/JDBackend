const categoryModel = require('../models/category');

exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({message: "Category name is required"})
        }

        const existing = await categoryModel.findOne({ name: name.trim().toLowerCase() });
        if (existing) {
            return res.status(400).json({message: "Category already exists"})
        }
        const category = await categoryModel.create({
            name, description
        })
        res.status(201).json({message: "Category created successfully", data: category})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find()
        res.status(200).json({message: "Categories retrieved successfully", data: categories})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.getCategory = async (req, res) => {
    try {
        const category = await categoryModel.findById(req.params.id)
        if (!category) {
            return res.status(404).json({message: "Category not found"})
        }
        res.status(200).json({data: category})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = await categoryModel.findByIdAndUpdate(req.params.id, { name, description }, { new: true })
        if (!category) {
            return res.status(404).json({message: "Category not found"})
        }
        res.status(200).json({message: "Category updated successfully", data: category})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const category = await categoryModel.findByIdAndDelete(req.params.id)
        if (!category) {
            return res.status(404).json({message: "Category not found"})
        }
        res.status(200).json({message: "Category deleted successfully", data: category})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
