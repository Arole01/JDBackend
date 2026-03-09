const express = require('express');
const { createCategory, getAllCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();


router.post("/category", createCategory)
router.get("/category",getAllCategories)
router.get("/category/:id",getCategory)
router.put("/category/:id",updateCategory)
router.delete("/category/:id",deleteCategory)

module.exports = router