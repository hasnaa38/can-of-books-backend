'use strict';

const bookModel = require('../models/Book.model');

let getBooksListController = (req, res) => {
    bookModel.find().then(data => {
        res.json(data);
    })
}

module.exports = getBooksListController;