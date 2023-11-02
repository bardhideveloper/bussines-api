const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');
const User = require('./User.js');

const Order = sequelize.define('Order',{
  order_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_cost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  timestamps:true,
});

Order.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Order;