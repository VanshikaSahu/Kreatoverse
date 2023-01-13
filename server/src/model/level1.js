const mongoose = require('mongoose')

const Level1Schema = new mongoose.Schema({  
    Name:{
        type: String,
        required: true
    },
})

const Level1 = mongoose.model('level1', Level1Schema)

module.exports = Level1