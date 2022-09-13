'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    weight:DataTypes.FLOAT,
    size: DataTypes.FLOAT,
    model: DataTypes.STRING,
    description: DataTypes.TEXT,
    color: DataTypes.STRING,
    follow: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER,
    brandID: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });

  Product.associate = function(models){
    Product.belongsTo(models.Category,{
      foreignKey:'categoryId'})
  }

  Product.associate = function(models){
    Product.belongsTo(models.Brand,{
      foreignKey:'brandID'
    })
  }

  Product.associate = function(models){
    Product.hasMany (models.Order,{
      foreignKey:'productId'
    })
  }




  return Product;
};