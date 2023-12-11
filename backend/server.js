require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const salesRoutes = require('./salesRoutes'); // Adjust the path as necessary
const salesController = require('./controllers/salesController'); // Ensure this path is correct

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB Connection using the environment variable
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

}).then(() => {
  console.log("Connected to the database!");
}).catch(err => {
  console.error("Cannot connect to the database!", err);
  process.exit();
});

// Routes
app.use('/api/sales', salesRoutes); // Use the sales routes

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // Exporting the app for testing or further extension
