const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const FloorPlan = sequelize.define('FloorPlan', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  property_id: { type: DataTypes.STRING(36), allowNull: false },
  floor_plan_url: { type: DataTypes.TEXT, allowNull: false }
}, {
  tableName: 'property_floor_plans'
});

module.exports = FloorPlan;