const express = require('express');
const router = express.Router();
const { barChartController } = require('../controllers/barChartController');

router.get('/', barChartController);

module.exports = router;
