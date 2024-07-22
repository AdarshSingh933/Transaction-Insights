// routes/statistics.js
const express = require('express');
const Transaction = require('../models/Transaction');

const statisticsController = async (req, res) => {
  const { month } = req.query;

  
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const monthIndex = monthNames.indexOf(month);

  if (monthIndex === -1) {
    return res.status(400).json({ message: 'Invalid month format. Use full month name like "January".' });
  }

  const startDate2021 = new Date(2021, monthIndex, 1);
  const endDate2021 = new Date(2021, monthIndex + 1, 1);
  const startDate2022 = new Date(2022, monthIndex, 1);
  const endDate2022 = new Date(2022, monthIndex + 1, 1);

  const query = {
    $or: [
      { dateOfSale: { $gte: startDate2021, $lt: endDate2021 } },
      { dateOfSale: { $gte: startDate2022, $lt: endDate2022 } }
    ]
  };

  try {
    const transactions = await Transaction.find(query);

    const totalSaleAmount = transactions.reduce((acc, transaction) => acc + transaction.sold?transaction.price:0, 0);
    const totalSoldItems = transactions.filter(transaction => transaction.sold).length;
    const totalNotSoldItems = transactions.length - totalSoldItems;

    res.status(200).json({
      totalSaleAmount,
      totalSoldItems,
      totalNotSoldItems
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching statistics', error });
  }
}

module.exports = {statisticsController};
