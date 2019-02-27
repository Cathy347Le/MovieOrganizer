const mongoose = require("../db/connection");

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
  imdbrating: { type: Number, min: 0, max: 10 }
});

module.exports = mongoose.model("Movie", MovieSchema);
