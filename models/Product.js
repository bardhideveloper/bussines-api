const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    // unique: true,
  },
  price: {
    type: DataTypes.DECIMAL(10,2)
  },
  stock: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
}, {
  timestamps: true, 
});

module.exports = Product;