'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    order: DataTypes.STRING,
    customerId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    statusShippId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });

  Order.associate = function(models){
    Order.belongsTo(models.Customer,{
      foreignKey:'customerId'
    })
  }

  Order.associate = function(models){
    Order.belongsTo(models.Payment,{
      foreignKey:'paymentId'
    })
  }

  Order.associate = function(models){
    Order.belongsTo(models.Product,{
      foreignKey:'productId'
    })
  }

  Order.associate = function(models){
    Order.belongsTo(models.OrderStatus,{
      foreignKey:'statusId'
    })
  }

  Order.associate = function(models){
    Order.belongsTo(models.ShippmentStatus,{
      foreignKey:'statusShippId'
    })
  }
  return Order;
};