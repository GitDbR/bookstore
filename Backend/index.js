import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"


// const express = require('express')
// const dotenv = require('dotenv')

//this syntax of 'require' was used before ES6 version of js. Bit now we'l use another method to import

const app = express()

app.use(cors()) //middleware
app.use(express.json()) //parse incomming data into json

dotenv.config()
//above two lines of code are for importing and congiguring  the .env file in nodejs
const PORT = process.env.PORT || 4000;  //this line of code will run only if dotenv npm is installed, imported and configured
const URI = process.env.MongoDBURI;


//connect to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connected to mongoDB")
} catch (error) {
  console.log("Error: ", error);
}

//defining routes

app.use("/book", bookRoute)
app.use("/user", userRoute)

app.get('/', (req, res) => {
  res.send('Hello User!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

//this whle code I got from express js website