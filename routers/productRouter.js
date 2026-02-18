const { createProduct, getAllProducts, getAproduct, updateProduct } = require("../controllers/productController")
const upload = require("../Utils/multer")

const router = require("express").Router()

router.post("/addproduct", upload.single("Image"), createProduct)
router.get("/getproducts", getAllProducts)
router.get("/getproduct/:id", getAproduct)
router.put("/updateproduct/:id",  updateProduct)
module.exports = router