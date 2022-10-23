const express = require('express')
const Product = require('../model/product')

const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            vendorID: req.body.vendorID
          });
          console.log(product)
        const newProduct = await product.save()       

    } catch (err) {
        console.log(err)
        res.send("Unable to create product")
    }
})

router.post("/:id", async(req, res)=>{
    try {
        const _id = req.params.id
        const filter = {_id: _id}
        const updateProduct = {
            $set:{
                name: req.body.name,
                price: req.body.price,
                category: req.body.category
            }
        }
        const product = await Product.updateOne(filter,updateProduct )
        console.log(product)
    } catch (err) {
        console.log(err)
        res.send("Unable to update product")
    }
})



router.get("/:id", async(req, res)=>{
    try {
        const id = req.params.id
        const products = await Product.find({vendorID: id})
        res.send(products)
    } catch (err) {
        
    }
})

router.delete("/:id", async(req, res)=>{
    try {
        const _id = req.params.id
        const filter = {_id: _id}
        const product = await Product.findOneAndDelete(filter)
        console.log(product)
        res.send(product)
    } catch (err) {
        console.log(err)
    }
})





module.exports = router;