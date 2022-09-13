'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order: {
        type: Sequelize.STRING
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Customers',
          key:'id'
        }
      },
      paymentId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Payments',
          key:'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Products',
          key:'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'OrderStatuses',
          key:'id'
        }
      },
      statusShippId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'ShippmentStatuses',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};