const jwt = require("jsonwebtoken");

const signTokens = (userId) => {
  const accessToken = jwt.sign({ id: userId }, process.env.AUTH_SECRET, {
    expiresIn: process.env.AUTH_EXPIRES,
  });

  const refreshToken = jwt.sign({ id: userId }, process.env.REFRESH_SECRET, {
    expiresIn: process.env.REFRESH_EXPIRES,
  });

  return { accessToken, refreshToken };
};

module.exports = signTokens;

//Xz