const userModel = require("../models/user")
const bcrypt = require("bcryptjs")

exports.homepage = (req,res) =>{
    try {
        res.json("Welcome to my API")
    } catch (error){
        console.log(error)
    }
} 


exports.createUser = async (req,res)=>{
    try {

    const {firstName, lastName, password, email} = req.body

    if(!firstName){
        return res.status(400).json({
            message: `First Name is Required`
        })
    }

    if(!lastName){
        return res.status(400).json({
            message: `Last Name is Required`
        })
    }

    if(!password){
        return res.status(400).json({
            message: `Password is Required`
        })
    }

    if(!email){
        return res.status(400).json({
            message: `Email is Required`
        })
    }

        const saltPassword = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, saltPassword)
        const userinfo = {
            firstName: firstName.trim().charAt(0).toUpperCase() + firstName.trim().slice(1),
            lastName: lastName.trim().charAt(0).toUpperCase() + lastName.trim().slice(1),
            password: hashPassword,
            email: email.trim().toLowerCase()
        }


        const user = await userModel.create(userinfo)
        res.json(user)


    } catch (error){
        res.json(error.message)
    }
}