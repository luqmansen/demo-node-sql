'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.authors)
    }
  }
  Book.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    published: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};