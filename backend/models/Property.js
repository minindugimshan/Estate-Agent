// backend/models/Property.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Property = sequelize.define('Property', {
  id: {
    type: DataTypes.STRING(36),
    primaryKey: true
  },
  // ... other fields ...
}, {
  tableName: 'properties',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

Property.associate = (models) => {
  Property.belongsTo(models.User, {
    foreignKey: 'user_id',
    as: 'owner'
  });
  Property.hasMany(models.Image, {
    foreignKey: 'property_id',
    as: 'images'
  });
  Property.hasOne(models.FloorPlan, {
    foreignKey: 'property_id',
    as: 'floorPlan'
  });
  Property.hasOne(models.LocationIframe, {
    foreignKey: 'property_id',
    as: 'location'
  });
};

module.exports = Property;