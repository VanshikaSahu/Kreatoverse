const express = require('express')
const Admin = require('../model/admin')

const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        const email = req.body.email
        const password = req.body.password
        const adminemail = await Admin.findOne({email})
        if(adminemail.password === password){
            res.status(201).send("success")
        }else{
            res.send({status: "error", message: "Please enter correct userId or password"})
        }
    } catch (err) {
        res.send({status: "error", message: "Admin email not found"})
    }
})


module.exports = router;