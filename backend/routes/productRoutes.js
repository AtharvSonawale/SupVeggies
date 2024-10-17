const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Add a product
router.post('/add', async (req, res) => {
  const { name, description, price, quantity, farmerId } = req.body;

  try {
    const newProduct = new Product({ name, description, price, quantity, farmerId });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('farmerId');
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
