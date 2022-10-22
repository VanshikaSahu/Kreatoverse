const express = require('express')

const router = express.Router()

router.post("/", async(req, res)=>{
    console.log(req)
    try {
        const email = req.body.email
        const password = req.body.password
    } catch (err) {
        res.status(400).send("invalid request")
    }
})


module.exports = router;