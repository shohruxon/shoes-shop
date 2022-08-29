const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("racing_boots", {
    title: "Racing Boots",
  });
});

module.exports = router;
