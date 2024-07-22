const express = require('express');
const router = express.Router();
const { transactionsController } = require('../controllers/transactionsController');

router.get('/', transactionsController);

module.exports = router;
