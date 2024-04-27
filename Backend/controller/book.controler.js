import Book from  "../model/book.model.js";  // here we have defined structure of our data

export  const getBook =async (req, res) =>{
    try {
        const book =await Book.find() // here we are finding data in our model
        //if the data is found
        res.status(200).json(book)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json(error); //status 500 - internal server error
    }
}