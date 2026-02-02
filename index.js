const Port = 3123;
const {homepage} = require("./controllers/appController")
const express = require("express")
const router = require("./routers/appRouter")
const app = express()

app.use(router)

app.listen(Port, ()=>{
    console.log(`My server is running on port ${Port}`)
})




