const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(400).json({
      auth: false,
      message: "No token provider!",
    });
  };

  const decoded = jwt.verify(token, process.env.AUTH_SECRET);
  req.userId = decoded.id;
  next();
};

module.exports = verifyToken;

//Xz