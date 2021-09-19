'use strict';

const mongoose = require('mongoose');

// 1- Database schema
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String,
});

// 2- Database collection/object's model. Any object made based of this model will follow the schema
//Mongo will add 's' to the end of its name, so when we run show collections inside the db we will find books not book
const bookModel = mongoose.model('book', bookSchema);

// The seed function is needed to instantiate the collection. After requesting it, it can be commented
let seedBooks = () => {
    let book1 = new bookModel(
        {
            title: 'The idiot brain',
            description: 'A book that describes how the human brain works in the simplest way possible.',
            status: 'Available',
            email: 'xxxxxx@gmail.com',
        });
    let book2 = new bookModel(
        {
            title: 'The last letters of Jacopo Ortis',
            description: 'A novel about a person named Jacopo Ortis, who travels to Italy in despair after Napoleon invaded his country.',
            status: 'Available',
            email: 'xxxxxx@gmail.com',
        });
    let book3 = new bookModel(
        {
            title: 'Pride and prejudice',
            description: 'A novel that follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.',
            status: 'Available',
            email: 'xxxxxx@gmail.com',
        });
        
    book1.save();
    book2.save();
    book3.save();
}

module.exports = bookModel;
