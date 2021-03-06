const express = require("express");
const router = express.Router();
const { List } = require("../models/list");
const { Movie } = require("../models/list");
const listController = require("../controllers/list");
const movieController = require("../controllers/movie");

//route for home page, which displays all the movies
router.get("/", function(req, res) {
  Movie.find({})
    .sort({ title: 1 })
    .then(movies => {
      res.render("index", { movies });
    });
});

//route to display all the movies my imbd ratings
router.get("/rate", function(req, res) {
  Movie.find({})
    .sort({ rating: "desc" })
    .then(movies => {
      res.render("index", { movies });
    });
});

//route for movie resource
router.get("/movie/new", movieController.new);
router.post("/movie", movieController.create);
router.get("/movie/:id", movieController.show);
router.delete("/movie/:id", movieController.delete);

//route for List resource
router.get("/list", listController.index);
router.get("/list/new", listController.new);
router.post("/list", listController.create);
router.get("/list/:id", listController.show);
router.get("/list/:id/edit", listController.edit);
router.put("/list/:id", listController.update);
router.delete("/list/:id", listController.delete);

//route for adding movie in List
router.get("/list/:id/movie/new", listController.newMovie);
router.post("/list/:id/movie", listController.createMovie);
// router.post("/list/:id/movie/:id", listController.showMovie);

//Send 404 status for all other routes
// router.all("*", function(req, res) {
//   res.status(404).send();
// });

module.exports = router;
