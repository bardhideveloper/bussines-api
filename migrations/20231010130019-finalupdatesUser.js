'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('users', 'age', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn('users', 'address', {
      type: Sequelize.STRING, 
      allowNull: false,
    });

    await queryInterface.addColumn('users', 'password', {
      type: Sequelize.STRING, 
      allowNull: false,
    });

    await queryInterface.addColumn('users', 'userRoleId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'UserRoles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'age');
    await queryInterface.removeColumn('users', 'address');
    await queryInterface.removeColumn('users', 'password');
    await queryInterface.removeColumn('users','userRoleId');
  }
};
