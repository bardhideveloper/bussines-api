'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    // await queryInterface.addColumn('orders', 'order_date', {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    // });

    // await queryInterface.addColumn('orders', 'total_cost', {
    //   type: Sequelize.DECIMAL(10,2), 
    //   allowNull: false,
    // });

    // await queryInterface.addColumn('orders', 'user_id', {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'users',
    //     key: 'id',
    //   },
    //   onUpdate: 'CASCADE',
    //   onDelete: 'SET NULL',
    // });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('orders', 'order_date');
    await queryInterface.removeColumn('orders', 'total_cost');
    await queryInterface.removeColumn('orders','user_id');
  }
};
