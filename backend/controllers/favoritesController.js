import Favorite
// const Favorite = require('../models/Favorite');
const Property = require('../models/Property');

// Get user's favorites
exports.getUserFavorites = async (req, res) => {
  try {
    // In a real app, user_id would come from auth middleware
    const userId = req.user.id; // Assuming you have authentication middleware
    
    const favorites = await Favorite.findAll({
      where: { user_id: userId },
      include: [{
        model: Property,
        as: 'property'
      }]
    });
    
    res.json(favorites.map(fav => fav.property));
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add property to favorites
exports.addFavorite = async (req, res) => {
  try {
    const userId = req.user.id; // From auth middleware
    const { propertyId } = req.params;
    
    // Check if property exists
    const property = await Property.findByPk(propertyId);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    // Check if already favorited
    const existingFavorite = await Favorite.findOne({
      where: { user_id: userId, property_id: propertyId }
    });
    
    if (existingFavorite) {
      return res.status(400).json({ error: 'Property already in favorites' });
    }
    
    // Add to favorites
    await Favorite.create({
      user_id: userId,
      property_id: propertyId
    });
    
    res.status(201).json({ message: 'Property added to favorites' });
  } catch (error) {
    console.error('Error adding favorite:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Remove property from favorites
exports.removeFavorite = async (req, res) => {
  try {
    const userId = req.user.id; // From auth middleware
    const { propertyId } = req.params;
    
    const deleted = await Favorite.destroy({
      where: { user_id: userId, property_id: propertyId }
    });
    
    if (deleted) {
      return res.json({ message: 'Property removed from favorites' });
    }
    
    res.status(404).json({ error: 'Favorite not found' });
  } catch (error) {
    console.error('Error removing favorite:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Clear all favorites for user
exports.clearFavorites = async (req, res) => {
  try {
    const userId = req.user.id; // From auth middleware
    
    await Favorite.destroy({
      where: { user_id: userId }
    });
    
    res.json({ message: 'All favorites cleared' });
  } catch (error) {
    console.error('Error clearing favorites:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};