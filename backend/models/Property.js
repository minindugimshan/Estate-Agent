'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      Property.hasMany(models.Image, { foreignKey: 'property_id' });
      Property.hasMany(models.FloorPlan, { foreignKey: 'property_id' });
      Property.hasMany(models.LocationIframe, { foreignKey: 'property_id' });
      Property.belongsToMany(models.User, {
        through: models.Favorite,
        foreignKey: 'property_id'
      });
    }
  }
  
  Property.init({
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('house', 'flat'),
      allowNull: false
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false
    },
    tenure: {
      type: DataTypes.ENUM('Freehold', 'Leasehold'),
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    short_description: DataTypes.TEXT,
    long_description: DataTypes.TEXT,
    location: DataTypes.STRING(255),
    date_added: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Property',
    tableName: 'properties',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return Property;
};