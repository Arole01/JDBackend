const { createProduct } = require("../controllers/productController")

const router = require("express").Router()

router.post("/addproduct", createProduct)

module.exports = router