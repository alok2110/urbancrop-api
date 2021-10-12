const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("product", productSchema);
