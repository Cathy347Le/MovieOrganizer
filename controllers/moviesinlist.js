const { Movie } = require("../models/list");
const { List } = require("../models/list");

module.exports = {
  new: (req, res) => {
    res.render("movie/new");
  },
  create: (req, res) => {
    const { title, genre, year, rating } = req.body;
    List.movies
      .create({
        title,
        genre,
        year,
        rating
      })
      .then(movie => {
        res.redirect(`/list/movie/${movie.id}`);
      });
  },
  show: (req, res) => {
    Movie.findById(req.params.id).then(movie => {
      res.render("movie/show", { movie });
    });
  },
  delete: (req, res) => {
    Movie.remove({ _id: req.params.id }).then(movie => {
      console.log(movie);
      res.redirect("/");
    });
  }
};
