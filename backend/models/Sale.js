const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Add other relevant fields based on your user journey
});

module.exports = mongoose.model('Sale', saleSchema);
