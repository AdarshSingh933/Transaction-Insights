const axios = require('axios');
const Transaction = require('../models/Transaction');

const initDBController = async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data;
    // console.log("transactiondB",transactions);
    await Transaction.deleteMany();
    await Transaction.insertMany(transactions);

    res.status(200).json({ message: 'Database initialized successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error initializing database', error });
  }
};

module.exports = { initDBController };
