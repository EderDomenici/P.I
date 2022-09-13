'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('orderstatuses', [{
        statusName: 'Pendente'
      },
      {
        statusName: 'Aprovado'
      },
      {
        statusName: 'Separando Pedido'
      },
      {
        statusName: 'Enviado Para Transportadora'
      },
      {
        statusName: 'Em Transito'
      },
      {
        statusName: 'Entregue'
      }], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('orderstatuses', null, {});

  }
};
