const { createProduct, getAllProducts } = require("../controllers/productController")
const upload = require("../Utils/multer")

const router = require("express").Router()

router.post("/addproduct", upload.single("Image"), createProduct)
router.get("/getproducts", getAllProducts)
module.exports = router