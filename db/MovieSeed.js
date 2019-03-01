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
    rating: 7.5,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/kfX8Ctin3fSZbdnjh6CXSNZUOVP.jpg"
  });
  Movie.create({
    title: "Avicii: True Stories",
    genre: "Documentary",
    year: 2017,
    rating: 7.6,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/obVlatSLP94kmml5UaCjLsdWPWG.jpg"
  });
  Movie.create({
    title: "Get Out",
    genre: "Horror",
    year: 2017,
    rating: 7.7,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg"
  });
  Movie.create({
    title: "A Quiet Place",
    genre: "Drama",
    year: 2018,
    rating: 7.6,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"
  });
  Movie.create({
    title: "Abduction",
    genre: "Action",
    year: 2011,
    rating: 5.1,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/cUT6NQP5LAJpmUoStGtXmvNt4zA.jpg"
  });
  Movie.create({
    title: "Resident Evil",
    genre: "Action",
    year: 2002,
    rating: 6.7,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/fttmSgLEOdBNwQepW2lC6t0mbOm.jpg"
  });
  Movie.create({
    title: "Wonder Woman",
    genre: "Action",
    year: 2017,
    rating: 7.5,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg"
  });
  Movie.create({
    title: "Bohemian Rhapsody",
    genre: "Drama",
    year: 2018,
    rating: 8.1,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg"
  });
  Movie.create({
    title: "A Star is Born",
    genre: "Drama",
    year: 2018,
    rating: 7.9,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg"
  });
  Movie.create({
    title: "Jack Frost",
    genre: "Drama",
    year: 1998,
    rating: 5.3,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/cPmO5VZhqN4ocrgxjGaFmLeMREv.jpg"
  });
  Movie.create({
    title: "Bruce Almighty",
    genre: "Comedy",
    year: 2003,
    rating: 6.7,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/lgYKHifMMLT8OxYObMKa8b4STsr.jpg"
  });
  Movie.create({
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.8,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg"
  });
  Movie.create({
    title: "The Purge",
    genre: "Horror",
    year: 2013,
    rating: 5.7,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/tGGJOuLHX7UDlTz57sjfhW1qreP.jpg"
  });
  Movie.create({
    title: "Titanic",
    genre: "Drama",
    year: 1997,
    rating: 7.8,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/kHXEpyfl6zqn8a6YuozZUujufXf.jpg"
  });
  Movie.create({
    title: "Widows",
    genre: "Drama",
    year: 2018,
    rating: 7.1,
    image:
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/d31SGJSaX29ba5ZUbZcesGoDE7I.jpg"
  }).then(movies => {
    movies.save(err => console.log(err));
  });
});
