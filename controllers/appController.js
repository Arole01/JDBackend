const userModel = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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

    const userExist = await userModel.findOne({email: email.trim().toLowerCase()})

    if(userExist){
        return res.status(400).json({
            message: `User with email ${email} already exist`
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
        res.status(200).json({
            message: `User created successfully`,
            data: user
        })


    } catch (error){
        res.status(500).json({
            message: `Unable to create user`, 
            error: error.message
        })
    }
}


exports.loginUser = async (req,res)=>{
    try {
        const {email, password} = req.body

        const userExist = await userModel.findOne({email: email.trim().toLowerCase()})

        if(!userExist){
            return res.status(404).json({
                message: `User not found`
            })
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password)

        if(!isPasswordValid){
            return res.status(400).json({
                message: `Invalid password`
            })
        }
        const token = jwt.sign({id: userExist._id}, "Adeola", {expiresIn: "1d"})

        return res.status(200).json({
            message: `Login successful`,
            data: userExist,
            token
        }) 

    } catch (error){
        res.status(500).json({
            message: `Unable to login user`, 
            error: error.message
        })
    }
}