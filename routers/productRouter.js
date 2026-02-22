const { createProduct, getAllProducts, getAproduct, updateProduct } = require("../controllers/productController")
const upload = require("../Utils/multer")

const router = require("express").Router()
const { authenticateUser, authorizeUser } = require("../Utils/auth")
const { productValidator } = require("../Utils/validator")

router.post("/addproduct", authenticateUser,  upload.single("Image"), productValidator, createProduct)
router.get("/getproducts", getAllProducts)
router.get("/getproduct/:id", getAproduct)
router.put("/updateproduct/:id", authorizeUser, updateProduct)
module.exports = router