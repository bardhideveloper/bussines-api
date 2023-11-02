const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');
const Order = require('./Order.js');
const Product = require('./Product.js');

const OrderItem = sequelize.define('OrderItem',{
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    unit_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    total_price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull:false,
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Order,
          key: 'id',
        },
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Product,
          key: 'id',
        },
      },
},{
    timestamps:true,
});

OrderItem.belongsTo(Order,{foreignKey:'order_id'});
OrderItem.belongsTo(Product,{foreignKey:'product_id'});

module.exports = OrderItem;