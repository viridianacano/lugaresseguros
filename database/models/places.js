'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class places extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      places.belongsTo(models.addresses);
      places.belongsTo(models.users);
      places.hasMany(models.comments);
    }
  }
  places.init({
    name: DataTypes.STRING,
    description: DataTypes.INTEGER,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'places',
  });
  return places;
};