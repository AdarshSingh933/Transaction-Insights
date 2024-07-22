const express = require('express');
const router = express.Router();
const { statisticsController } = require('../controllers/statisticsController');

router.get('/', statisticsController);

module.exports = router;
