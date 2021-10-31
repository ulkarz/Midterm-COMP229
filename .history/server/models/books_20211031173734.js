/*
    File name: books.js
    Name: Ulkar Zakaryayeva
    Student Number: 301107604
    Date: October 31, 2021
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
}, {
    collection: "books"
});

module.exports = mongoose.model('Book', Book);