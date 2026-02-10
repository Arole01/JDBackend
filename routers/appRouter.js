const router = require("express").Router()
const {homepage, createUser, loginUser} = require ("../controllers/appController")





router.get("/homepage",homepage)
router.post("/newuser",createUser)
router.post("/login", loginUser)


module.exports = router