'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('brands', [{
        brandName: 'Iphone'
      },
      {
        brandName: 'Samsung'
      },
      {
        brandName: 'Xiaomi'
      }], {});

  },

  async down (queryInterface, Sequelize) {


     await queryInterface.bulkDelete('brands', null, {});

  }
};
