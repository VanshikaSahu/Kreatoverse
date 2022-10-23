require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const DB = process.env.DATABASE_URL

mongoose.connect(DB).then(()=>{
    console.log("connection successfull")
}).catch((err)=>{console.log(err)})

const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000', 'https://admin-portal-frontend.onrender.com']
}));
 
const APP_PORT = process.env.APP_PORT || 8080;

app.use(express.json())

require("./routes/routes.js")(app);

app.listen(APP_PORT, ()=> {
    console.log("Listening on port %s", APP_PORT);  
  });