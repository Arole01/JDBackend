const router = require("express").Router()
const {homepage, createUser, loginUser, verifyEmail} = require ("../controllers/appController")





router.get("/homepage",homepage)
router.post("/newuser",createUser)
router.post("/login", loginUser)
router.put("/verify", verifyEmail)


module.exports = router