const express = require('express')
const Vendor = require('../model/vendorDetails')
const nodemailer = require('nodemailer');

const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        const password = require('../utils/passwordGenerator')()
        const vendor = new Vendor({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phone,
            address: req.body.address,
            password: password,
            products:[]
          });
          const email = req.body.email
        const findVendor = await Vendor.findOne({email})
        if(findVendor){
            res.send("Vendor already exist")
        }else{
            const done = await vendor.save()
            let mailTransporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'vanshikasahu0@gmail.com',
                    pass: 'ytvjpxerfljaqpyu'
                }
            });
            let mailDetails = {
                from: 'vanshikasahu0@gmail.com',
                to: 'vanshikasahu0@gmail.com',
                subject: 'Vendor login details',
                text: `Your password for logging the vendor portal is ${password}`
            };
            mailTransporter.sendMail(mailDetails, function(err, data) {
                if(err) {
                    console.log(err)
                    console.log('Error Occurs');
                } else {
                    console.log('Email sent successfully');
                }
            });
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

router.get("/:id", async(req, res)=>{
    try {
        const _id = req.params.id
        const vendor = await Vendor.findOne({_id})
        console.log(vendor)
        res.send(vendor)
    } catch (err) {
        console.log(err)
    }
})



 
module.exports = router;