const router = require("express").Router()
const {homepage, createUser} = require ("../controllers/appController")





router.get("/homepage",homepage)
router.post("/newuser",createUser)


module.exports = router