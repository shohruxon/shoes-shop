const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "..", "public");

module.exports = (filename) => {
  fs.unlink(folder + filename, (err) => {
    if (err) console.log(err);
  });
};
