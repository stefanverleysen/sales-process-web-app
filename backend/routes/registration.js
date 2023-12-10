// routes/registration.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create a new user
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

module.exports = router;
