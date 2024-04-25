import express from "express"
import dotenv from "dotenv"


// const express = require('express')
// const dotenv = require('dotenv')

//this syntax of 'require' was used before ES6 version of js. Bit now we'l use another method to import

const app = express()

dotenv.config()
//above two lines of code are for importing and congiguring  the .env file in nodejs
const PORT = process.env.PORT || 4000;  //this line of code will run only if dotenv npm is installed, imported and configured

app.get('/', (req, res) => {
  res.send('Hello User!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

//this code I got from express js website