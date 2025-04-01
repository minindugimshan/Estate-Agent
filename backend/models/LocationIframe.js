const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const LocationIframe = sequelize.define('LocationIframe', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  property_id: { type: DataTypes.STRING(36), allowNull: false },
  iframe_url: { type: DataTypes.TEXT, allowNull: false }
}, {
  tableName: 'property_location_iframes'
});

module.exports = LocationIframe;