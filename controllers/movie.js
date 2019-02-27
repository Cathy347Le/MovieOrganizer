const Movie = require("../models/movie");

module.exports = {
  new: (req, res) => {
    res.render("movie/new");
  },
  create: (req, res) => {
    const { title, genre, year, rating } = req.body;
    Movie.create({
      title,
      genre,
      year,
      rating
    }).then(movie => {
      res.redirect(`/movie/${movie.id}`);
    });
  },
  show: (req, res) => {
    Movie.findById(req.params.id).then(movie => {
      res.render("movie/show", { movie });
    });
  },
  delete: (req, res) => {
    console.log("delete movie");
  }
};
