const mongoose = require("../db/connection");

//Set up MovieSchema first, then List Schema. MovieSchema is a child of the List Schema,
// so you want to export both in module exports
const MovieSchema = new mongoose.Schema({
  title: String,
  genre: {
    type: String,
    enum: [
      "Action",
      "Animation",
      "Comedy",
      "Documentary",
      "Drama",
      "Horror",
      "Romance"
    ]
  },
  year: Number,
  rating: Number
});

const ListSchema = new mongoose.Schema({
  title: String,
  description: String,
  movies: [MovieSchema],
  image: String
});

module.exports = {
  List: mongoose.model("List", ListSchema),
  Movie: mongoose.model("Movie", MovieSchema)
};
