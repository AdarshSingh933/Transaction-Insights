const express = require('express');
const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

const combinedController = async (req, res) => {
  const { month } = req.query;

  try {
    // Fetch data from the transactions API
    const transactionsResponse = await axios.get(`${API_URL}/transactions`, {
      params: { month, page: 1, perPage: 10, search: '' }
    });
    const transactions = transactionsResponse.data;

    // Fetch data from the statistics API
    const statisticsResponse = await axios.get(`${API_URL}/statistics`, {
      params: { month }
    });
    const statistics = statisticsResponse.data;

    // Fetch data from the bar chart API
    const barChartResponse = await axios.get(`${API_URL}/bar-chart`, {
      params: { month }
    });
    const barChart = barChartResponse.data;

    // Fetch data from the pie chart API
    const pieChartResponse = await axios.get(`${API_URL}/pie-chart`, {
      params: { month }
    });
    const pieChart = pieChartResponse.data;

    // Combine the responses into one JSON object
    const combinedResponse = {
      transactions,
      statistics,
      barChart,
      pieChart
    };

    // Send the combined response
    res.json(combinedResponse);
  } catch (error) {
    console.error('Error fetching combined data:', error);
    res.status(500).json({ message: 'Error fetching combined data', error });
  }
}

module.exports = {combinedController};
