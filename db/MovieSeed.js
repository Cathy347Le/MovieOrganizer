const { Movie } = require("../models/list");

Movie.remove({}).then(function() {
  Movie.create({
    title: "Aquaman",
    genre: "Action",
    year: 2018,
    rating: 7.3,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg"
  });
  Movie.create({
    title: "Love Actually",
    genre: "Romance",
    year: 2003,
    rating: 7.5
  });
  Movie.create({
    title: "Avicii: True Stories",
    genre: "Documentary",
    year: 2017,
    rating: 7.6
  });
  Movie.create({
    title: "Get Out",
    genre: "Horror",
    year: 2017,
    rating: 7.7
  });
  Movie.create({
    title: "A Quiet Place",
    genre: "Drama",
    year: 2018,
    rating: 7.6
  });
  Movie.create({
    title: "Abduction",
    genre: "Action",
    year: 2011,
    rating: 5.1
  });
  Movie.create({
    title: "Resident Evil",
    genre: "Action",
    year: 2002,
    rating: 6.7
  });
  Movie.create({
    title: "Wonder Woman",
    genre: "Action",
    year: 2017,
    rating: 7.5
  });
  Movie.create({
    title: "Bohemian Rhapsody",
    genre: "Drama",
    year: 2018,
    rating: 8.1
  });
  Movie.create({
    title: "A Star is Born",
    genre: "Drama",
    year: 2018,
    rating: 7.9
  });
  Movie.create({
    title: "Jack Frost",
    genre: "Drama",
    year: 1998,
    rating: 5.3
  }).then(movies => {
    movies.save(err => console.log(err));
  });
});
