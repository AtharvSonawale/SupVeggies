const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Place a new order
router.post('/place', async (req, res) => {
  const { buyerId, farmerId, productId, quantity, totalAmount } = req.body;

  try {
    const newOrder = new Order({ buyerId, farmerId, productId, quantity, totalAmount });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get orders by buyerId
router.get('/:buyerId', async (req, res) => {
  try {
    const orders = await Order.find({ buyerId: req.params.buyerId }).populate('productId');
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
