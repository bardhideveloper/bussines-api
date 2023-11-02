const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Product = require('../models/Product');
const sequelize = require('../db.js');

exports.createOrderWithProducts = async (req, res) => {
  try {
    const { user_id, products } = req.body;

    // Check if there is sufficient stock for each product in the order
    for (const product of products) {
      const dbProduct = await Product.findByPk(product.product_id);
      if (dbProduct.stock < product.quantity) {
        return res.status(400).json({ error: 'Not enough stock available for a product.' });
      }
    }

    const total_cost = products.reduce((total, product) => {
      return total + product.quantity * product.unit_price;
    }, 0);

    const t = await sequelize.transaction();

    try {
      const order = await Order.create({ user_id, order_date: new Date(), total_cost }, { transaction: t });

      for (const product of products) {
        const { product_id, quantity, unit_price } = product;
        const total_price = quantity * unit_price;

        const dbProduct = await Product.findByPk(product_id, { transaction: t });
        dbProduct.stock -= quantity;
        await dbProduct.save({ transaction: t });

        await OrderItem.create(
          {
            order_id: order.id,
            product_id,
            quantity,
            unit_price,
            total_price,
          },
          { transaction: t }
        );
      }

      await t.commit();

      res.status(201).json(order);
    } catch (error) {

      await t.rollback();
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};