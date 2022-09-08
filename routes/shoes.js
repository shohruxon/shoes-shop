const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("/", async (req, res) => {
  let products = JSON.parse(JSON.stringify(await Product.find()));

  products.forEach((item) => {
    item.product = JSON.stringify(item);
  });
  
  res.render("shoes", {
    title: "Shoes",
    products,
  });
});

module.exports = router;
