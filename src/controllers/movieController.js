const Movie = require("../models/movieModel");
const jwt = require("jsonwebtoken");

//METHOD -> POST
//PATH -> movies/create
//ACCESS -> PUBLIC
const createMovie = async (req, res) => {
  const { movieName, rating, cast, genre, releaseDate } = req.body;

  const newMovie = new Movie({
    movieName,
    rating,
    cast,
    genre,
    releaseDate,
  });

  try {
    const movie = await newMovie.save();
    res.status(201).send(movie);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

//METHOD -> GET
//PATH -> movies/get-accessToken
//ACCESS -> PUBLIC
// WILL GENERATE A ACCESS TOKEN  WHICH IS USED TO ACCESS PRIVATE ENDPOINTS
const getJwtToken = (_, res) => {
  try {
    const token = jwt.sign({ data: "token" }, process.env.JWTSECRETKEY, {
      expiresIn: "1h",
    });
    res.status(200).send(token);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

//METHOD -> DELETE
//PATH -> movies/delete
//ACCESS -> PRIVATE
//DELETE USING MOVIE NAME
const deleteMovie = async (req, res) => {
  const { movieName } = req.query;
  try {
    const movie = await Movie.findOne({ movieName });
    if (!movie) {
      res.status(400).send("movie Doesn't exist");
      return;
    }
    await Movie.deleteOne({ movieName });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//METHOD -> PUT
//PATH -> movies/update
//ACCESS -> PRIVATE
//UPDATE USING MOVIE NAME
const updateMovie = async (req, res) => {
  const { movieName, rating, cast, genre, releaseDate, filter } = req.body;
  const options = { movieName, rating, cast, genre, releaseDate };
  try {
    const movie = await Movie.findOne({ movieName });
    if (!movie) {
      res.status(400).send("movie Doesn't exist");
      return;
    }
    await Movie.updateOne({ movieName: filter }, options);
    res.status(200).send("updated SuccessFully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//METHOD -> GET
//PATH -> movies/getAllMovies
//ACCESS -> PUBLIC
const getAllMovies = async (_, res) => {
  try {
    const movie = await Movie.find({});
    res.status(200).send(movie);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createMovie,
  getJwtToken,
  deleteMovie,
  updateMovie,
  getAllMovies,
};
