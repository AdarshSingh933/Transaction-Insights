const express = require('express');
const router = express.Router();
const { combinedController } = require('../controllers/combinedController');

router.get('/', combinedController);

module.exports = router;
