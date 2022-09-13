'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CreditCards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numberCard: {
        type: Sequelize.INTEGER
      },
      expDate: {
        type: Sequelize.STRING
      },
      cvv: {
        type: Sequelize.INTEGER
      },
      nameCard: {
        type: Sequelize.STRING
      },
      cpf: {
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
    await queryInterface.dropTable('CreditCards');
  }
};