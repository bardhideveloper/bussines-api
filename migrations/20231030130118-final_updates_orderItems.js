'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('orderitems', 'quantity');
    await queryInterface.removeColumn('orderitems', 'unit_price');
    await queryInterface.removeColumn('orderitems', 'total_price');
    await queryInterface.removeColumn('orderitems','order_id');
    await queryInterface.removeColumn('orderitems','product_id');
  }
};
