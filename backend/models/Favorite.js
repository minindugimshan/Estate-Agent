'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      // Associations can be defined here if needed
    }
  }

  Favorite.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    property_id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Favorite',
    tableName: 'favorites',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
  });

  return Favorite;
};