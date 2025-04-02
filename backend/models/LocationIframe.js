'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LocationIframe extends Model {
    static associate(models) {
      LocationIframe.belongsTo(models.Property, {
        foreignKey: 'property_id',
        as: 'property'
      });
    }
  }

  LocationIframe.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    property_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    iframe_url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'LocationIframe',
    tableName: 'property_location_iframes',
    timestamps: false
  });

  return LocationIframe;
};