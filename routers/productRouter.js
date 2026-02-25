const { createProduct, getAllProducts, getAproduct, updateProduct } = require("../controllers/productController")
const upload = require("../Utils/multer")

const router = require("express").Router()
const { authenticateUser, authorizeUser } = require("../Utils/auth")
const { productValidator } = require("../Utils/validator")

router.post("/product", authenticateUser,  upload.single("Image"), productValidator, createProduct)
router.get("/product", getAllProducts)
router.get("/product/:id", getAproduct)
router.put("/product/:id", authorizeUser, updateProduct)
module.exports = router