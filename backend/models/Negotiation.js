const mongoose = require('mongoose');

const negotiationSchema = new mongoose.Schema({
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  proposedPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Negotiation', negotiationSchema);
