// backend/seed.js
require('dotenv').config();
const { sequelize, Property, Image, FloorPlan, LocationIframe } = require('./models');
const propertiesData = require('./data/properties.json');

async function seedDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established!');

    await sequelize.sync({ force: true });
    console.log('Database tables created!');

    for (const prop of propertiesData.properties) {
      const property = await Property.model.create({
        id: prop.id,
        title: prop.title || `${prop.type} in ${prop.location}`,
        type: prop.type.toLowerCase(),
        bedrooms: prop.bedrooms,
        price: prop.price,
        tenure: prop.tenure,
        postcode: prop.postcode,
        short_description: prop.shortDescription || prop.longDescription.substring(0, 100) + '...',
        long_description: prop.longDescription,
        location: prop.location,
        date_added: new Date(`${prop.added.year}-${getMonthNumber(prop.added.month)}-${prop.added.day}`)
      });

      await Image.model.bulkCreate(
        prop.images.map((img, index) => ({
          property_id: prop.id,
          image_url: img,
          is_primary: index === 0
        }))
      );

      if (prop.floorPlan) {
        await FloorPlan.model.create({
          property_id: prop.id,
          floor_plan_url: prop.floorPlan
        });
      }

      if (prop.iframe) {
        await LocationIframe.model.create({
          property_id: prop.id,
          iframe_url: prop.iframe
        });
      }
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
}

function getMonthNumber(monthName) {
  const months = {
    January: '01', February: '02', March: '03', April: '04',
    May: '05', June: '06', July: '07', August: '08',
    September: '09', October: '10', November: '11', December: '12'
  };
  return months[monthName];
}

seedDatabase();