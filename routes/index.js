const express = require("express");
const router = express.Router();
const { List } = require("../models/list");
const { Movie } = require("../models/list");
const listController = require("../controllers/list");
const movieController = require("../controllers/movie");
//route for home page
// router.get("/", function(req, res) {
//   Movie.find({}).then(movies => {
//     res.render("index", { movies });
//   });
// });

router.get("/", function(req, res) {
  List.find({}).then(lists => {
    Movie.find({}).then(movies => {
      res.render("index", { lists, movies });
    });
  });
});

// router.get("/", function(req, res) {
//   List.find({}).then(lists => {
//     res.render("index", { lists });
//   });
// });

//route for movie resource
router.get("/movie/new", movieController.new);
router.post("/movie", movieController.create);
router.get("/movie/:id", movieController.show);
router.delete("/movie/:id", movieController.delete);

//route for List resource
router.get("/list/new", listController.new);
router.post("/list", listController.create);
router.get("/list/:id", listController.show);
router.get("/list/:id/edit", listController.edit);
router.put("/list/:id", listController.update);
router.delete("/list/:id", listController.delete);

//route for adding movie in List
router.get("/list/:id/movie/new", listController.newMovie);
router.post("/list/:id/movie", listController.createMovie);

//Send 404 status for all other routes
// router.all("*", function(req, res) {
//   res.status(404).send();
// });

module.exports = router;
