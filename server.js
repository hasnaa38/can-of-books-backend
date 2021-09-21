'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //Requesting mongoose
require('dotenv').config();
const app = express();
app.use(cors());

const { getBooksListController, addBooksController, deleteBookController, updateBookController } = require('./controllers/Book.controller');
app.use(express.json());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
app.get('/test', (request, response) => { response.send('test request received')}); //Checking the server

const MONGO_SERVER = process.env.MONGO_SERVER;
mongoose.connect(`${MONGO_SERVER}`, {useNewUrlParser: true, useUnifiedTopology: true});

// The GET method
app.get('/books', getBooksListController);

// The POST method
app.post('/add-book', addBooksController);

// The DELETE method
// When using params, we add /:id to the endpoint path
app.delete('/delete-book/:id', deleteBookController);

// The PUT method
app.put('/update-book/:id', updateBookController);

//The seed function is needed to instantiate the collection, after requesting it, it can be commented
/* const seedBooks = require('./models/Book.model');
app.get('/seed-data', (req, res) => {
  seedBooks();
  res.json({'Message':'Book object created successfully'});
}); */
