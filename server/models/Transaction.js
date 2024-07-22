const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  dateOfSale: Date,
  category: String,
  sold: Boolean,
  image: String // Add this line to include the image URL
});

module.exports = mongoose.model('Transaction', transactionSchema);
