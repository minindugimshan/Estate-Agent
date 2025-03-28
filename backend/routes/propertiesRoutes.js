const express = require('express');
const router = express.Router();
const propertiesController = require('../controllers/propertiesController');
const { authenticate, authorize } = require('../middlewares/auth');

// Public routes
router.get('/', propertiesController.getAllProperties);
router.get('/:id', propertiesController.getPropertyById);

// Protected admin routes
router.post('/', authenticate, authorize('admin'), propertiesController.createProperty);
router.put('/:id', authenticate, authorize('admin'), propertiesController.updateProperty);
router.delete('/:id', authenticate, authorize('admin'), propertiesController.deleteProperty);

module.exports = router;