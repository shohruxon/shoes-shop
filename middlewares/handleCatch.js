const winston = require("winston");

module.exports = function (err, req, res, next) {
  console.log("catch...............");
  winston.error(err.message);
  res.status(500).send(err.message);
};
