const { Router } = require("express");
const router = Router();
const Product = require("../model/product");

router.get("/", async (req, res) => {
  let products = JSON.parse(JSON.stringify(await Product.find()));

  products.forEach((item) => {
    item.product = JSON.stringify(item);
  });

  res.render("index", {
    products,
    title: "Home",
  });
});

router.use("/shoes", require("./shoes"));

router.use("/contact", require("./contact"));

router.use("/racing_boots", require("./racing_boots"));

router.use("/cart", require("./cart"));

module.exports = router;
