const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Property = sequelize.define('Property', {
  id: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false
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
  short_description: {
    type: DataTypes.TEXT
  },
  long_description: {
    type: DataTypes.TEXT
  },
  location: {
    type: DataTypes.STRING(255)
  },
  date_added: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'properties',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Property;