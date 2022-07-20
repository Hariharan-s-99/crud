const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  movieName: {
    type: String,
  },
  rating: {
    type: Number,
  },
  cast: {
    type: Array,
  },
  genre: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
