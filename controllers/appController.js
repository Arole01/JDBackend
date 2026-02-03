const userModel = require("../models/user")
exports.homepage = (req,res) =>{
    try {
        res.json("Welcome to my API")
    } catch (error){
        console.log(error)
    }
} 


exports.createUser = async (req,res)=>{
    try {
        const user = await userModel.create(req.body)
        res.json(user)


    } catch (error){
        res.json(error.message)
    }
}