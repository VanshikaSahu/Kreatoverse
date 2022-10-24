const express = require('express')
const Product = require('../model/product')
const authenticateToken = require('../utils/authenticateToken')

const router = express.Router()

router.post("/", authenticateToken, async(req, res)=>{
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            vendorID: req.body.vendorID
          });
        const newProduct = await product.save()  
        res.send({status:"success", message:"product created successfully" })     
    } catch (err) {
        res.send({status:"error", message:"Unable to create product"})
    }
})

router.put("/:id",authenticateToken, async(req, res)=>{
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
        res.send({status: "success", message:"Product updated successfully"})
    } catch (err) {
        res.send({status: "error", message:"Unable to update product"})
    }
})

router.get("/:id", authenticateToken, async(req, res)=>{
    try {
        const id = req.params.id
        const products = await Product.find({vendorID: id})
        res.send(products)
    } catch (err) {       
    }
})

router.delete("/:id", authenticateToken, async(req, res)=>{
    try {
        const _id = req.params.id
        const filter = {_id: _id}
        const product = await Product.findOneAndDelete(filter)
        res.send({status: "success", message:"product deleted successfully"})
    } catch (err) {
        res.send({status: "error", message:"Unable to delete product"})
    }
})

module.exports = router;