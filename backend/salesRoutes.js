const express = require('express');
const router = express.Router();
const salesController = require('./controllers/salesController');

// POST request to create a new sale
router.post('/', salesController.createSale);

// GET request to retrieve all sales
router.get('/', salesController.getSales);

// GET request to retrieve a single sale by ID
router.get('/:id', salesController.getSaleById);

// PUT request to update an existing sale
router.put('/:id', salesController.updateSale);

// DELETE request to delete a sale
router.delete('/:id', salesController.deleteSale);

module.exports = router;
