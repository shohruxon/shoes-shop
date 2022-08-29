const { Router } = require("express");
const router = Router();
const Product = require("../model/product");

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.render("index", {
    products,
    title: "Home",
  });
});

router.use("/shoes", require("./shoes"));

router.use("/contact", require("./contact"));

router.use("/racing_boots", require("./racing_boots"));

module.exports = router;
