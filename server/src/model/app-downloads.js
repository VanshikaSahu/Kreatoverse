const mongoose = require('mongoose')

const AppDownloadsSchema = new mongoose.Schema({  
    deviceId:{
        type: String,
        required: true
    },
    clientIp:{
        type: String,
        required: true,
    },
    hostName:{
        type: String,
        required: true,
    },
    download:{
        type: String,
        required: true,
    },
    upload:{
        type: String,
        required: true,
    },
    useageSeconds:{
        type: String,
        required: true,
    },
    createdAt:{
        type: String,
        required: true,
    },
})

const AppDownloads = mongoose.model('app-downloads', AppDownloadsSchema)

module.exports = AppDownloads