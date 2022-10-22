require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

//mongoose.connect('mongodb://localhost/admin')
//const db = mongoose.connection 
//db.on('error', (err)=>console.log(err))
//db.once('open', ()=>console.log('connected to database'))

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));
 
const APP_PORT = process.env.APP_PORT || 8080;

app.use(express.json())

require("./routes/routes.js")(app);

app.listen(APP_PORT, ()=> {
    console.log("Listening on port %s", APP_PORT);  
  });