const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("/", async (req, res) => {
  const products = await Product.find();

  res.render("shoes", {
    title: "Shoes",
    products,
  });
});

module.exports = router;
