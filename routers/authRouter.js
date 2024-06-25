const Router = require("express")
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authRouter = Router()
const secret = 'mysecret'

authRouter.post('/login',async (req,res) => {
    try{
        const {username,password} = req.body.username
        const response = await User.findOne({username,password})
        if(response){
            const payload = {username:response.username,email:response.email}
            const token = jwt.sign({username:response.username},secret)
            res.status(200).json({payload,token})
        }else{
            res.status(401).json({message:'Invalid credentials'})
        }
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

authRouter.post('/register',async (req,res) => {
    try{
        const {username,password,email} = req.body.user
        const userExists = await User.findOne({username})
        if(userExists){
            return res.status(400).json({message:'User already exists'})
        }
        const response = await User.create({username,password,email})
        const payload = {username:response.username,email:response.email}
        const token = jwt.sign({username:response.username},secret)
        res.status(200).json({payload,token})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

module.exports = authRouter