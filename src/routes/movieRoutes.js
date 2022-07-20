const router = require("express").Router();
const {
  createMovie,
  getJwtToken,
  deleteMovie,
  updateMovie,
  getAllMovies,
} = require("../controllers/movieController");

const verifyJwt = require("../middlewares/verifyJwtToken");

//PUBLIC ENDPOINTS
router.post("/create", createMovie);
router.get("/accessToken", getJwtToken);
router.get("/getAllMovies", getAllMovies);

//PRIVATE ENDPOINTS
//JWT VERIFICATION NEEDED
router.delete("/delete", verifyJwt, deleteMovie);
router.put("/update", verifyJwt, updateMovie);

module.exports = router;
