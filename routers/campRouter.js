const Router = require("express")
const Destination = require("../models/destination");

const campRouter = Router()

campRouter.get('/getall', async (req,res) => {
    try{
        const response = await Destination.find({})
        res.status(200).json(response)
    }catch(err){
        console.log("Some error occurred "+err)
    }
})


module.exports = campRouter