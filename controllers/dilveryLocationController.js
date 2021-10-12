const formidable = require("formidable");
const { body, validationResult } = require("express-validator");
const { htmlToText } = require("html-to-text");

const DilveryLocation = require("../models/DilveryLocation");

module.exports.createDilveryLocation = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (error, fields, files) => {
    const {
      alt_contact,
      shop_name,
      area,
      location,
      pincode,
      longitude,
      latitude,
    } = fields;
    const errors = [];
    if (alt_contact === "") {
      errors.push({ msg: "Contact is required" });
    }
    if (shop_name === "") {
      errors.push({ msg: "Shop name is required" });
    }
    if (area === "") {
      errors.push({ msg: "area is required" });
    }
    if (location === "") {
      errors.push({ msg: "location is required" });
    }
    if (pincode === "") {
      errors.push({ msg: "location is required" });
    }
    if (longitude === "") {
      errors.push({ msg: "longitude is required" });
    }
    if (latitude === "") {
      errors.push({ msg: "latitude is required" });
    }

    if (errors.length !== 0) {
      return res.status(400).json({ errors, files });
    } else {
      try {
        const response = await Product.create({
          alt_contact,
          shop_name,
          area,
          location,
          pincode,
          longitude,
          latitude,
        });
        return res.status(200).json({
          msg: "Your Address added successfully",
          response,
        });
      } catch (error) {
        return res.status(500).json({ errors: error, msg: error.message });
      }
    }
  });
};
