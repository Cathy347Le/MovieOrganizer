const mongoose = require("../db/connection");

const Movie = new mongoose.Schema({
  Title: String,
  Genre: {
    type: String,
    enum: ["Action", "Animation", "Comedy", "Drama", "Horror", "Romance"],
    ImbdRating: { type: Number, min: 0, max: 10 }
  }
});

module.exports = mongoose.model("Movie", Movie);
