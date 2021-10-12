const express = require("express");
const router = express.Router();
const {
  createDilveryLocation,
} = require("../controllers/dilveryLocationController");

router.post("/create_dilvery_address", createDilveryLocation);
module.exports = router;
