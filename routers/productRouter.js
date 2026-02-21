const { createProduct, getAllProducts, getAproduct, updateProduct } = require("../controllers/productController")
const upload = require("../Utils/multer")

const router = require("express").Router()
const { authenticateUser, authorizeUser } = require("../Utils/auth")

router.post("/addproduct", authenticateUser, upload.single("Image"), createProduct)
router.get("/getproducts", getAllProducts)
router.get("/getproduct/:id", getAproduct)
router.put("/updateproduct/:id", authorizeUser, updateProduct)
module.exports = router