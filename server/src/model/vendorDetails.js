const mongoose = require('mongoose')

const vendorDetailsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: number,
        required: true
    },
    address:{
        type: String,
    },
    products:{
        type: String,
    },

})

const Vendor = mongoose.model('vendor', vendorDetailsSchema )

module.exports = Vendor