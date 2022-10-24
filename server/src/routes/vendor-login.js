const express = require('express')
const Vendor = require('../model/vendorDetails')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        const email = req.body.email
        const password = req.body.password
        const vendor = await Vendor.findOne({email})
        const user = {email,password}
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        if(vendor.password === password){
            res.status(201).send({status: "success", data: vendor, accessToken: accessToken})
        }else{
            res.send({status: "error", message: "Please enter correct userId or password"})
        }

    } catch (err) {
        res.send({status: "error", message:"vendor email not found"})
    }
})

module.exports = router;