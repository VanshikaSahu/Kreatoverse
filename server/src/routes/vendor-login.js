const express = require('express')
const Vendor = require('../model/vendorDetails')

const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        const email = req.body.email
        const password = req.body.password
        console.log(email)
        const vendor = await Vendor.findOne({email})
        if(vendor.password === password){
            res.status(201).send({status: "success", data: vendor})
        }else{
            res.send({status: "error", message: "Please enter correct userId or password"})
        }
    } catch (err) {
        res.send({status: "error", message:"vendor email not found"})
    }
})

module.exports = router;