//IMPORTS
const express = require("express");
const dbConnection = require("./src/configs/db");
const movieRoutes = require("./src/routes/movieRoutes");
require("dotenv").config();


//APP INITIALIZATION
const app = express();


//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//ROUTES
app.use("/movies", movieRoutes);


//DBCONNECTION
dbConnection();


app.listen(process.env.PORT, () =>
  console.log(`Listening at PORT ${process.env.PORT}`)
);
