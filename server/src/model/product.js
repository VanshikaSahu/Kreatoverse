const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    vendorID:{
        type: String,
        required: true,
    },
    price:{ 
        type: Number,
        required: true
    },
    category:{
        type: String,
    }
})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product