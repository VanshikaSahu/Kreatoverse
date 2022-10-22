const express = require('express')
const Vendor = require('../model/vendorDetails')

const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        const email = req.body.email
        const password = req.body.password
        const vendor = await Admin.findOne({email})
        if(vendor.password === password){
            res.status(201).send("success")
        }else{
            res.send("Please enter correct userId or password")
        }
    } catch (err) {
        res.send("vendor email not found")
    }
})

module.exports = router;