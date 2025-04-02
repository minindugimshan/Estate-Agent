require('dotenv').config();
const { sequelize, Property, Image, FloorPlan, LocationIframe } = require('../models');
const propertiesData = require('../data/properties.json');

async function seedDatabase() {
  try {
    console.log('Starting database seeding...');
    
    // Skip if in production
    if (process.env.NODE_ENV === 'production') {
      console.log('Seeding skipped in production environment');
      return;
    }

    await sequelize.authenticate();
    
    // Use force: true only in development
    await sequelize.sync({ force: process.env.NODE_ENV !== 'production' });
    
    // Skip if data already exists
    const existingProperties = await Property.count();
    if (existingProperties > 0) {
      console.log('Database already seeded. Skipping...');
      return;
    }

    console.log('Seeding properties...');
    for (const prop of propertiesData.properties) {
      const property = await Property.create({
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

      // Seed images
      if (prop.images?.length) {
        await Image.bulkCreate(
          prop.images.map((img, index) => ({
            property_id: prop.id,
            image_url: img,
            is_primary: index === 0
          }))
        );
      }

      // Seed floor plan
      if (prop.floorPlan) {
        await FloorPlan.create({
          property_id: prop.id,
          floor_plan_url: prop.floorPlan
        });
      }

      // Seed location iframe
      if (prop.iframe) {
        await LocationIframe.create({
          property_id: prop.id,
          iframe_url: prop.iframe
        });
      }
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
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

// Only run if called directly (not when required)
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;