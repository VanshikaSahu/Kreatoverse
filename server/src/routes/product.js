const express = require('express')
const Vendor = require('../model/vendorDetails')

const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        const vendor = req.body.vendor
        const vendoremail = vendor.email
        console.log(req.body.vendor)
        const findVendor = await Vendor.findOne({vendoremail})
        if(findVendor){
            const updated = await Vendor.findOneAndUpdate(
                {_id: findVendor._id},
                {$push: {products: req.body.product}}
            )
            console.log(updated)
        }   
        
    } catch (err) {
        console.log(err)
        res.send("invalud")
    }
})


module.exports = router;