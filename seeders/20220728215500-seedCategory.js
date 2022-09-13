'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {


     await queryInterface.bulkInsert('categories', [{
        name: 'Smartphone'
      },
      {
        name: 'Tablet'
      },
      {
        name: 'Wearables'
      }
      ], {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('categories', null, {});

  }
};
