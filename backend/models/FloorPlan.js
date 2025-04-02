'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FloorPlan extends Model {
    static associate(models) {
      FloorPlan.belongsTo(models.Property, {
        foreignKey: 'property_id',
        as: 'property'
      });
    }
  }

  FloorPlan.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    property_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    floor_plan_url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FloorPlan',
    tableName: 'property_floor_plans',
    timestamps: false
  });

  return FloorPlan;
};