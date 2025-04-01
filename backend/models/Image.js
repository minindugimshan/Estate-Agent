const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Image = sequelize.define('Image', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  property_id: { type: DataTypes.STRING(36), allowNull: false },
  image_url: { type: DataTypes.TEXT, allowNull: false },
  is_primary: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  tableName: 'property_images'
});

module.exports = Image;