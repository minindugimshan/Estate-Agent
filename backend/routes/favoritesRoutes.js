const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');
const { authenticate } = require('../middlewares/auth');

router.use(authenticate);

router.get('/', favoritesController.getUserFavorites);
router.post('/:propertyId', favoritesController.addFavorite);
router.delete('/:propertyId', favoritesController.removeFavorite);
router.delete('/', favoritesController.clearFavorites);

module.exports = router;