require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/admin')
const db = mongoose.connection 
//db.on('error', (err)=>console.log(err))
//db.once('open', ()=>console.log('connected to database'))
 
const APP_PORT = process.env.APP_PORT || 8080;

app.use(express.json())



app.listen(APP_PORT, ()=> {
    console.log("Listening on port %s", APP_PORT);  
  });