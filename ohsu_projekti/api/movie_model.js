const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Movie = new Schema({
  title: {
    type: String
  },
  year: {
    type: String
  },
  rating: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'movies'
});

module.exports = mongoose.model('Movie', Movie);