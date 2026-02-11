const router = require("express").Router()
const {homepage, createUser, loginUser, verifyEmail, resetOtp, resetPassword} = require ("../controllers/appController")





router.get("/homepage",homepage)
router.post("/newuser",createUser)
router.post("/login", loginUser)
router.put("/verify", verifyEmail)
router.post("/reset",resetOtp)
router.patch("/resetpassword", resetPassword)


module.exports = router