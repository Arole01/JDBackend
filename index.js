require("dotenv").config()
const cors = require("cors")
const Port = 3123;
const {homepage} = require("./controllers/appController")
const express = require("express")
const router = require("./routers/appRouter")
const productRouter = require("./routers/productRouter")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
app.use(cors())
app.use(router)
app.use("/api", productRouter)

mongoose.connect(process.env.db).then(
    ()=>{console.log("DB connection established")
        app.listen(Port, ()=>{
    console.log(`My server is running on port ${Port}`)
})

    }
).catch((error)=>{
        console.log("Unable to connect" + error)
    }
)






