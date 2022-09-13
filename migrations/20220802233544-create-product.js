'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      weight: {
        type: Sequelize.FLOAT
      },
      size:{
        type: Sequelize.FLOAT
      },
      model:{
        type: Sequelize.STRING
      },
      description:{
        type: Sequelize.TEXT
      },
      color:{
        type: Sequelize.STRING
      },
      follow:{
        type: Sequelize.TEXT
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Categories',
          key: 'id'
        }
      },
      brandID: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Brands',
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Products');
  }
};