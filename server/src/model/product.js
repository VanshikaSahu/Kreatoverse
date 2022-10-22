const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ID:{
        type: String,
        required: true,
        unique:true
    },
    price:{
        type: number,
        required: true
    },
    category:{
        type: String,
    }
})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product