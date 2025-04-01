
const sequelize = require('../config/db');

const User = require('./User');
const Property = require('./Property');
const Image = require('./Image');
const FloorPlan = require('./FloorPlan');
const LocationIframe = require('./LocationIframe');

// Initialize associations
User.associate({ Property });
Property.associate({ User, Image, FloorPlan, LocationIframe });
Image.associate({ Property });
FloorPlan.associate({ Property });
LocationIframe.associate({ Property });

module.exports = {
  sequelize,
  User,
  Property,
  Image,
  FloorPlan,
  LocationIframe
};