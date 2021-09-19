'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //Requesting mongoose
require('dotenv').config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

const MONGO_SERVER = process.env.MONGO_SERVER;
mongoose.connect(`${MONGO_SERVER}/CanOfBooks`, {useNewUrlParser: true, useUnifiedTopology: true});
app.get('/test', (request, response) => { response.send('test request received')}); //Checking the server

//The seed function is needed to instantiate the collection, after requesting it, it can be commented
/* const seedBooks = require('./models/Book.model');
app.get('/seed-data', (req, res) => {
  seedBooks();
  res.json({'Message':'Book object created successfully'});
}); */

const getBooksListController = require('./controllers/Book.controller');
app.get('/books', getBooksListController);