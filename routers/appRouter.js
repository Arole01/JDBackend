const router = require("express").Router()
const {homepage, createUser, loginUser, verifyEmail, resetOtp, resetPassword} = require ("../controllers/appController")
const {signUpValidator} = require("../Utils/validator")




router.get("/homepage",homepage)
router.post("/newuser",signUpValidator,createUser)
router.post("/login", loginUser)
router.put("/verify", verifyEmail)
router.post("/reset",resetOtp)
router.patch("/resetpassword", resetPassword)


module.exports = router