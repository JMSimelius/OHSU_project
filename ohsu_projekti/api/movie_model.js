const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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