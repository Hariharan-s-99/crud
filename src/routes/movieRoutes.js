const router = require("express").Router();
const {
  createMovie,
  getJwtToken,
  deleteMovie,
  updateMovie,
  getAllMovies,
} = require("../controllers/movieController");

router.post("/create", createMovie);
router.get("/get-accessToken", getJwtToken);
router.delete("/delete", deleteMovie);
router.put("/update", updateMovie);
router.get("/getAllMovies", getAllMovies);

module.exports = router;
