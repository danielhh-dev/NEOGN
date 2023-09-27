const express = require('express');
const router = express.Router();
const getProductController = require('../controllers/Products/getProducts');

router.get('/', getProductController);

module.exports = router;