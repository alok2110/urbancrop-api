const express = require("express");
const router = express.Router();
const {
  createProduct,
  deleteProduct,
} = require("../controllers/productController");
router.post("/create_product", createProduct);
router.get("/delete/:id", deleteProduct);
module.exports = router;
