'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventory.init({
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    avaible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};