const mongoose = require('mongoose')
const Product = require('./product')

const vendorDetailsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    address:{
        type: String,
    },
    password:{
        type:String,
    },
    products:{
        type: {},
    },

})

const Vendor = mongoose.model('vendor', vendorDetailsSchema)

module.exports = Vendor