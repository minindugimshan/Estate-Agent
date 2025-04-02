// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// module.exports = {
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   dialect: 'mysql',
//   dialectModule: require('mysql2')
// };

require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test connection
sequelize.authenticate()
  .then(() => console.log('Database connection established!'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;