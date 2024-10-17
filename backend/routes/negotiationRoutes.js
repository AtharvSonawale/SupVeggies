const express = require('express');
const Negotiation = require('../models/Negotiation');
const router = express.Router();

// Initiate a negotiation
router.post('/initiate', async (req, res) => {
  const { buyerId, farmerId, productId, proposedPrice } = req.body;

  try {
    const newNegotiation = new Negotiation({ buyerId, farmerId, productId, proposedPrice });
    await newNegotiation.save();
    res.status(201).json(newNegotiation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get negotiations for a buyer
router.get('/:buyerId', async (req, res) => {
  try {
    const negotiations = await Negotiation.find({ buyerId: req.params.buyerId }).populate('productId');
    res.status(200).json(negotiations);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
