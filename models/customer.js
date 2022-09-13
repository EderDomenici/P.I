'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthDay: DataTypes.STRING,
    cpf: DataTypes.STRING,
    address: DataTypes.STRING,
    complementary: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    cep: DataTypes.STRING,
    referencePoint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  Customer.associate = function(models){
    Customer.hasMany(models.CreditCard,{
      foreignKey:'customerId'
    })

    Customer.associate = function(models){
      Customer.hasMany(models.Order,{
        foreignKey:'customerId'
      })
    }
  }
  return Customer;
};