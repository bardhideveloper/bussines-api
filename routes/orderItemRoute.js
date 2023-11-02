const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController.js');

router.post('/orderitems', orderItemController.createOrderWithProducts);

module.exports = router