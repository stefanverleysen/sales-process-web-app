const Sale = require('../models/Sale'); // Adjust the path as needed

// Create a new sale
exports.createSale = async (req, res) => {
  try {
    const newSale = new Sale({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.body.createdBy, // This should be the user's ID
      // Populate other fields from req.body
    });

    await newSale.save();
    res.status(201).json(newSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all sales
exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a sale by ID
exports.getSaleById = async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await Sale.findById(id);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a sale by ID
exports.updateSaleById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSale = await Sale.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.status(200).json(updatedSale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a sale by ID
exports.deleteSaleById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSale = await Sale.findByIdAndRemove(id);
    if (!deletedSale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.status(204).send(); // 204 No Content response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
