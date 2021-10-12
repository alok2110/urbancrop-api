const { model, Schema } = require("mongoose");

const dilveryLocationSchema = new Schema(
  {
    alt_contact: {
      type: Number,
      required: true,
    },
    shop_name: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("dilveryLocation", dilveryLocationSchema);
