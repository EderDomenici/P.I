'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreditCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CreditCard.init({
    numberCard: DataTypes.INTEGER,
    expDate: DataTypes.STRING,
    cvv: DataTypes.INTEGER,
    nameCard: DataTypes.STRING,
    cpf: DataTypes.STRING,
    customerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CreditCard',
  });

  CreditCard.associate = function(models){
    CreditCard.belongsTo(models.Customer,{
      foreignKey:'customerId'
    });
  }
  return CreditCard;
};