const express = require('express');
const cors = require('cors');
const propertiesRoutes = require('./routes/propertiesRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');
const errorHandler = require('./middlewares/errorHandler');
const sequelize = require('./config/db');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/properties', propertiesRoutes);
app.use('/api/favorites', favoritesRoutes);

// Error handling
app.use(errorHandler);

// Sync database and start server
const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to sync database:', err);
});