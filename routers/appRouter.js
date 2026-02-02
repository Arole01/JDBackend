const router = require("express").Router()
const {homepage} = require ("../controllers/appController")





router.get("/homepage",homepage)


module.exports = router