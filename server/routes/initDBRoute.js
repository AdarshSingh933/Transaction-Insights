const express = require('express');
const router = express.Router();
const { initDBController } = require('../controllers/initDBController');

router.get('/', initDBController);

module.exports = router;
