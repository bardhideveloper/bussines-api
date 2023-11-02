const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const ContactUs = sequelize.define('ContactUs', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
        timestamps:true,
    });

module.exports = ContactUs;