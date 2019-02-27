const Movie = require("../models/movie");

// Movie.remove({}).then(function() {
//   Movie.create({
//     title: "Aquaman",
//     genre: "Action",
//     year: 2018,
//     imdbrating: 7.3
//   });
//   Movie.create({
//     title: "Love Actually",
//     genre: "Romance",
//     year: 2003,
//     imdbrating: 7.5
//   });
// });

Movie.remove({}).then(function() {
  Movie.create({
    title: "Aquaman",
    genre: "Action",
    year: 2018,
    imdbrating: 7.3
  });
  Movie.create({
    title: "Love Actually",
    genre: "Romance",
    year: 2003,
    imdbrating: 7.5
  });
  Movie.create({
    title: "Avicii: True Stories",
    genre: "Documentary",
    year: 2017,
    imdbrating: 7.6
  });
  Movie.create({
    title: "Get Out",
    genre: "Horror",
    year: 2017,
    imdbrating: 7.7
  });
  Movie.create({
    title: "A Quiet Place",
    genre: "Drama",
    year: 2018,
    imdbrating: 7.6
  });
  Movie.create({
    title: "Abduction",
    genre: "Action",
    year: 2011,
    imdbrating: 5.1
  });
  Movie.create({
    title: "Resident Evil",
    genre: "Action",
    year: 2002,
    imdbrating: 6.7
  });
  Movie.create({
    title: "Wonder Woman",
    genre: "Action",
    year: 2017,
    imdbrating: 7.5
  });
});
