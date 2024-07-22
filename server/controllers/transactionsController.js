// routes/transactions.js
const express = require('express');
const Transaction = require('../models/Transaction');

const transactionsController = async (req, res) => {
  const { page = 1, perPage = 10, search = '', month } = req.query;

  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const monthIndex = monthNames.indexOf(month);

  if (monthIndex === -1) {
    return res.status(400).json({ message: 'Invalid month format. Use full month name like "January".' });
  }

  const regex = new RegExp(search, 'i');

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

  if (search) {
    query.$or.push(
      { title: regex },
      { description: regex },
      { price: regex }
    );
  }

  

  try {
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(parseInt(perPage));
    

    const count = await Transaction.countDocuments(query);

    res.status(200).json({
      transactions,
      totalPages: Math.ceil(count / perPage),
      currentPage: parseInt(page)
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
}

module.exports = { transactionsController };
