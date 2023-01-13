const mongoose = require('mongoose')

const Level3Schema = new mongoose.Schema({  
    Name:{
        type: String,
        required: true
    },
    Level1_ID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Level2_ID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

})

const Level3 = mongoose.model('level3', Level3Schema)

module.exports = Level3