const jwt = require("jsonwebtoken");

const createToken = (baggage) => {
  return jwt.sign(baggage, process.env.HIDDEN);
};

const clarifyToken = (tokenium) => {
  return jwt.verify(tokenium, process.env.HIDDEN);
};

module.exports = { createToken, clarifyToken };
