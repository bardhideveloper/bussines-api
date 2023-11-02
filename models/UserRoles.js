const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');
const UserRoles = sequelize.define('UserRoles', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  
  module.exports = UserRoles;