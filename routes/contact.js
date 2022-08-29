const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("contact", {
    title: "Contact",
  });
});

module.exports = router;
