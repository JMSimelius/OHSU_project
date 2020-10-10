// post.model.js

const express = require('express');
const movieRoutes = express.Router();

// Require Post model in our routes module
let Movie = require('./movie_model');

// Defined store route
movieRoutes.route('/add').post(function (req, res) {
  let movie = new Movie(req.body);
  movie.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
movieRoutes.route('/').get(function (req, res) {
    Movie.find(function(err, movies){
    if(err){
      res.json(err);
    }
    else {
      res.json(movies);
    }
  });
});

// Defined edit route
movieRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Movie.findById(id, function (err, movie){
      if(err) {
        res.json(err);
      }
      res.json(movie);
  });
});

//  Defined update route
movieRoutes.route('/update/:id').post(function (req, res) {
    Movie.findById(req.params.id, function(err, movie) {
    if (!movie)
      res.status(404).send("data is not found");
    else {
        movie.title = req.body.title;
        movie.year = req.body.year;
        movie.rating = req.body.rating;
        movie.description = req.body.description;
        movie.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
movieRoutes.route('/delete/:id').delete(function (req, res) {
    Movie.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = movieRoutes;