'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShippmentStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShippmentStatus.init({
    shipStatusName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShippmentStatus',
  });

  ShippmentStatus.associate = function(models){
    ShippmentStatus.hasMany(models.Order,{
      foreignKey:'statusShippId'
    })

  }
  return ShippmentStatus;
};