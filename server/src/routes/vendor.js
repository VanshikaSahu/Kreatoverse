const express = require('express')
const Vendor = require('../model/vendorDetails')


const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        const vendor = new Vendor({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phone,
            address: req.body.address
          });
          const email = req.body.email
        const findVendor = await Vendor.findOne({email})
        if(findVendor){
            res.send("Vendor already exist")
        }else{
            const done = await vendor.save()
            console.log(done)
            res.send("created vendor successfully")
        }
    } catch (err) {
        console.log(err)
        res.send("Unable to create vendor")
    }
})

router.get("/", async(req, res)=>{
    try {
        const vendors = await Vendor.find()
        res.send(vendors)
    } catch (err) {
        
    }
})

 
module.exports = router;