const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController.js');

router.get('/orders', OrderController.getAllOrders);
router.get('/orders/:id', OrderController.getOrderById)
router.delete('/orders/:id',OrderController.deleteOrder);
router.put('/orders/:id', OrderController.updateOrder);

module.exports = router