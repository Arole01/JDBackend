const { createProduct } = require("../controllers/productController")
const upload = require("../Utils/multer")

const router = require("express").Router()

router.post("/addproduct", upload.single("Image"), createProduct)
module.exports = router