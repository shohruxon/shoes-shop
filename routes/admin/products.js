const { Router } = require("express");
const router = Router();
const Product = require("../../model/product");
const upload = require("../../middlewares/upload");
const toDelete = require("../../utils/toDelete");

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.render("admin/products", {
    products,
    layout: "admin",
  });
});

router.post("/add", upload.single("img"), async (req, res) => {
  if (!req.file) {
    return res.redirect("/admin/products");
  }

  req.body.img = "/uploads/" + req.file.filename;

  try {
    const product = await Product.create(req.body);
    console.log(product);
  } catch (error) {
    console.log(error);
  }
  res.redirect("/admin/products");
});

router.get("/delete/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    toDelete(product.img);
  } catch (error) {
    console.log(error);
  }
  res.redirect("/admin/products");
});

module.exports = router;
