'use strict';

const bookModel = require('../models/Book.model');

// The GET method
const getBooksListController = (req, res) => {
    bookModel.find({}).then(data => {
        res.status(200).json(data);
    })
}

// The POST method
const addBooksController = (req, res) => {
    console.log('POST request - Adding a new book');
    let { title, description, status, email, image } = req.body;
    let newBook = new bookModel({
        title: title,
        description: description,
        status: status,
        email: email,
        image: image,
    });
    newBook.save();
    console.log(' ---- Added the following book -----');
    console.log(newBook);
    res.status(200).json(newBook);
    // let booksList = await bookModel.find({});
    // res.status(200).json(booksList);
}

// The DELETE method
const deleteBookController = (req, res) => {
    console.log('DELETE request - Deleting a book');
    let id = req.params.id;
    bookModel.findByIdAndDelete(id, async (error) => {
        if (error) {
            res.status(500).send("an error occurred while deleting the book");
        }
        console.log(' ---- Deleted the following book -----');
        console.log('book id: ', id);
        let booksList = await bookModel.find({});
        res.status(200).json(booksList);
    });
}

// Exporting
module.exports = {
    getBooksListController,
    addBooksController,
    deleteBookController
};