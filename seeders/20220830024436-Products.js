'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('products', [{
        name: "Iphone",
        price: 235,
        weight: 5,
        size: 1,
        model: "13",
        description: "O celular Mais vendido no mundo." ,
        color: "Branco",
        follow: "Carregador",
        categoryId: 14,
        brandID: 14,
        amount:250
      },
      {
        name: "AppleWatch",
        price: 750,
        weight: 1,
        size: 0.5,
        model: "Series 3",
        description: "Com caixa de aluminio e blindado" ,
        color: "Cinza",
        follow: "Carregador",
        categoryId: 16,
        brandID: 14,
        amount:250
      },
      {
        name: "Ipad",
        price: 1.750,
        weight: 2,
        size: 4,
        model: "11 Pro",
        description: "O tablet mais vendido do munto" ,
        color: "Preto",
        follow: "Carregador",
        categoryId: 15,
        brandID: 14,
        amount:250
      },
      {
        name: "Galaxy",
        price: 200,
        weight: 4,
        size: 3,
        model: "S22",
        description: "O Segundo celular Mais vendido no mundo." ,
        color: "Preto",
        follow: "Carregador e Fone",
        categoryId: 14,
        brandID: 15,
        amount:250
      },
      {
        name: "Galaxy Watch",
        price: 200,
        weight: 4,
        size: 3,
        model: "5",
        description: "O Mais completo do mercado" ,
        color: "Rosé",
        follow: "Carregador",
        categoryId: 16,
        brandID: 15,
        amount:250
      },
      {
        name: "Samsung Tab",
        price: 200,
        weight: 4,
        size: 3,
        model: "5",
        description: "O Segundo tablet Mais vendido no mundo." ,
        color: "Preto",
        follow: "Carregador",
        categoryId: 15,
        brandID: 15,
        amount:250
      },
      {
        name: "Redmi Note",
        price: 650,
        weight: 3,
        size: 4,
        model: "11",
        description: "O Terceiro Celular mais vendido no mundo." ,
        color: "Preto",
        follow: "Carregador",
        categoryId: 14,
        brandID: 16,
        amount:250
      },
      {
        name: "Xiaomi Maimo",
        price: 300,
        weight: 1,
        size: 2,
        model: "3",
        description: "Um smartWatch blindado pra uso e etc" ,
        color: "branco",
        follow: "Carregador",
        categoryId: 16,
        brandID: 16,
        amount:250
      },
      {
        name: "Mi pad",
        price: 800,
        weight: 2,
        size: 7,
        model: "4",
        description: "O Terceiro tablet Mais vendido no mundo." ,
        color: "Preto",
        follow: "Carregador",
        categoryId: 15,
        brandID: 16,
        amount:250
      }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('products', null, {});

  }
};
