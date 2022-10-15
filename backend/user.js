const mongoose = require('mongoose')
require('dotenv').config()
const URL = process.env.MONGODB_URL


mongoose.connect(URL).then(result=>{
    console.log("connected to ",URL)
}).catch((error)=>{
    console.log("Error",error.message)
})


const userSchema = new mongoose.Schema({
    name : String,
    username : String,
    email : String,
    password : String,
    token : String,
    mailing : [{id: String, Name: String , Email : String}]
  })

  module.exports = mongoose.model('User',userSchema)