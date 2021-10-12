const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const { body, validationResult } = require("express-validator");
const { htmlToText } = require("html-to-text");
const fs = require("fs");

const Product = require("../models/Product");

module.exports.createProduct = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (error, fields, files) => {
    const { productName, image, quantity, price } = fields;
    const errors = [];
    if (productName === "") {
      errors.push({ msg: "Product Name is required" });
    }
    if (image === "") {
      errors.push({ msg: "image is required" });
    }
    if (quantity === "") {
      errors.push({ msg: "quantity is required" });
    }
    if (price === "") {
      errors.push({ msg: "price is required" });
    }
    if (Object.keys(files).length === 0) {
      errors.push({ msg: "Image is required" });
    } else {
      const { type } = files.image;
      const split = type.split("/");
      const extension = split[1].toLowerCase();
      if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
        errors.push({ msg: `${extension} is not a valid extension` });
      } else {
        files.image.name = uuidv4() + "." + extension;
      }
    }

    if (errors.length !== 0) {
      return res.status(400).json({ errors, files });
    } else {
      const newPath = __dirname + `/../client/build/images/${files.image.name}`;
      fs.copyFile(files.image.path, newPath, async (error) => {
        if (!error) {
          try {
            const response = await Product.create({
              productName,
              quantity,
              image: files.image.name,
              price,
            });
            return res.status(200).json({
              msg: "Your Product added successfully",
              response,
            });
          } catch (error) {
            return res.status(500).json({ errors: error, msg: error.message });
          }
        }
      });
    }
  });
};

module.exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Product.findByIdAndRemove(id);
    return res.status(200).json({ msg: "Your Product has been deleted" });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};
