//IMPORTS
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const dbConnection = require("./src/configs/db");
const movieRoutes = require("./src/routes/movieRoutes");

//APP INITIALIZATION
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // FOR PARSING COOKIES SENT VIA REQUEST

//CORS CONFIGURATION
app.use(cors());

//ROUTES
app.use("/movies", movieRoutes);

//DBCONNECTION
dbConnection();

app.listen(process.env.PORT, () =>
  console.log(`Listening at PORT ${process.env.PORT}`)
);
