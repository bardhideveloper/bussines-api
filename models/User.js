const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');
const UserRoles = require('./UserRoles.js');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userRoleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserRoles,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

User.belongsTo(UserRoles, { foreignKey: 'userRoleId' });

module.exports = User;