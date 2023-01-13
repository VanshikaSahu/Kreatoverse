const mongoose = require('mongoose')

const Level2Schema = new mongoose.Schema({  
    Name:{
        type: String,
        required: true
    },
    Level1_ID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const Level2 = mongoose.model('level2', Level2Schema)

module.exports = Level2