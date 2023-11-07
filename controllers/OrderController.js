const Order = require('../models/Order');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');

exports.getAllOrders = async (req, res) => {
    try {
      const { page = 1, perPage = 20 } = req.query;
      const offset = (page - 1) * perPage;
  
      const orders = await Order.findAll({
        offset,
        limit: perPage,
      });
  
      if (orders.length === 0) {
        return res.status(404).json({ message: 'No orders found' });
      }
  
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.getOrderById = async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id);
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.deleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id);
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      await order.destroy();
  
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.updateOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const { order_date, total_cost, user_id } = req.body;
  
      const order = await Order.findByPk(id);
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      order.order_date = order_date;
      order.total_cost = total_cost;
      order.user_id = user_id;
  
      await order.save();
  
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  