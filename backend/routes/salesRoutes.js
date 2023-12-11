const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController'); // Adjust the path as needed

router.post('/', salesController.createSale);
router.get('/', salesController.getAllSales); // You need to define this function in salesController
router.get('/:id', salesController.getSaleById); // And this one
router.put('/:id', salesController.updateSaleById); // And this one
router.delete('/:id', salesController.deleteSaleById); // And this one

module.exports = router;
