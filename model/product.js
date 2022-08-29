const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
});
module.exports = model("products", productSchema);
