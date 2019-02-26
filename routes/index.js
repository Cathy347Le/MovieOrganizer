const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie");

//route for home page
router.get("/", function(req, res) {
  res.send("Home page");
});

//route for movie resource
router.get("/movie/new", movieController.new);
router.post("/movie", movieController.create);
router.get("/movie/:id", movieController.show);
router.get("/movie/:id", movieController.delete);

//Send 404 status for all other routes
router.all("*", function(req, res) {
  res.status(404).send();
});

module.exports = router;
