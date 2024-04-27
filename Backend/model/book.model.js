import mongoose from "mongoose";

//writing a schema for our data in database

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    title:String,
    category:String,
    image: String,
})

//now creating model of this schema

const Book = mongoose.model("book", bookSchema) ;  //giving the model a name 

export default Book;  //exporting it so that we can use