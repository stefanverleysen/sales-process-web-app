// Example backend route (backend/routes/authRoutes.js)
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Your User model

// Handle user registration
router.post('/signup', async (req, res) => {
  try {
    // Extract user data from the request body
    const { username, email, password } = req.body;

    // Create a new user document
    const newUser = new User({
      username,
      email,
      password, // You should hash the password before saving it to the database for security
    });

    // Save the user to the database
    await newUser.save();

    // Redirect to the profile screen after successful registration
    res.redirect('/profile'); // You can customize this URL as needed
  } catch (err) {
    console.error(err);
    res.status(500).send('Error during registration');
  }
});

module.exports = router;
