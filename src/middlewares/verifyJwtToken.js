const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.cookies.cookie; //GETTING COOKIE
  if (!token) {
    res.status(401).send("Unauthorized!");
    return;
  }
  jwt.verify(token, process.env.JWTSECRETKEY, (err) => {
    if (!err) next(); //IF VALID TOKEN PROCEED FURTHER WITH CONROLLER FUNCTION
    else {
      res.status(401).send("Invalid Token");
    }
  });
};
