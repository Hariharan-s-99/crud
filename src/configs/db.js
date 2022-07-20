const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected to db Successfully"))
    .catch((error) => console.error(error));
};

module.exports = dbConnection;
