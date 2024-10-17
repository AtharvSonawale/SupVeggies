const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
