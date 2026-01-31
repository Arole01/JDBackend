const Port = 3123;
const express = require("express")
const app = express()

app.get("/homepage", (req,res) =>{
    try {
        res.json("Welcome to my API")
    } catch (error){
        console.log(error)
    }
})

app.listen(Port, ()=>{
    console.log(`My server is running on port ${Port}`)
})



