// const express = require('express');
// const cors = require('cors');
// const { sequelize } = require('./models');
// const propertiesRoutes = require('./routes/propertiesRoutes');
// const favoritesRoutes = require('./routes/favoritesRoutes');
// const errorHandler = require('./middlewares/errorHandler');

// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/properties', propertiesRoutes);
// app.use('/api/favorites', favoritesRoutes);

// // Error handling
// app.use(errorHandler);

// // Database connection and server startup
// async function startServer() {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connection established.');

//     // Sync models (alter: true for development only)
//     await sequelize.sync({ alter: true });
//     console.log('Database synchronized.');

//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error('Server startup failed:', error);
//     process.exit(1);
//   }
// }

// startServer();

// // Handle shutdown gracefully
// process.on('SIGINT', async () => {
//   console.log('Shutting down server...');
//   await sequelize.close();
//   process.exit(0);
// });

require('dotenv').config(); // Load environment variables first
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const propertiesRoutes = require('./routes/propertiesRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');
const errorHandler = require('./middlewares/errorHandler');

// Initialize Express app
const app = express();

// ======================
// 1. Critical Error Handling
// ======================
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

// ======================
// 2. Middleware
// ======================
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================
// 3. Route Handlers
// ======================
app.use('/api/properties', propertiesRoutes);
app.use('/api/favorites', favoritesRoutes);

// Test route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Backend is running'
  });
});

// ======================
// 4. Error Handling
// ======================
app.use(errorHandler);

// ======================
// 5. Database Connection & Server Startup
// ======================
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    console.log('⏳ Attempting database connection...');
    
    // Verify database credentials
    if (!process.env.DB_NAME || !process.env.DB_USER) {
      throw new Error('❌ Database credentials missing in .env file');
    }

    // Test database connection
    await sequelize.authenticate();
    console.log('✅ Database connection established');

    // Sync models
    console.log('⏳ Syncing database models...');
    await sequelize.sync({ alter: true });
    console.log('✅ Database models synced');

    // Start server
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📦 Connected to database: ${process.env.DB_NAME}`);
    });

    // Handle unhandled rejections
    process.on('unhandledRejection', (err) => {
      console.error('UNHANDLED REJECTION! 💥 Shutting down...');
      console.error(err.name, err.message);
      server.close(() => process.exit(1));
    });

  } catch (err) {
    console.error('❌ SERVER STARTUP FAILED:', err.message);
    console.error(err.stack);
    process.exit(1);
  }
};

// Start the application
startServer();