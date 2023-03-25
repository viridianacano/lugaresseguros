'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class adresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      addresses.hasOne(models.places);
    }
  }
  adresses.init({
    city: DataTypes.STRING,
    state: DataTypes.INTEGER,
    street: DataTypes.STRING,
    suburb: DataTypes.STRING,
    postalCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'adresses',
  });
  return adresses;
};