const Property = require('../models/Property');
const { Op } = require('sequelize');

// Get all properties with optional filters
exports.getAllProperties = async (req, res) => {
  try {
    const { type, minPrice, maxPrice, minBedrooms, maxBedrooms, postcode } = req.query;
    
    const where = {};
    
    if (type && type !== 'any') {
      where.type = type;
    }
    
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price[Op.gte] = parseFloat(minPrice);
      if (maxPrice) where.price[Op.lte] = parseFloat(maxPrice);
    }
    
    if (minBedrooms || maxBedrooms) {
      where.bedrooms = {};
      if (minBedrooms) where.bedrooms[Op.gte] = parseInt(minBedrooms);
      if (maxBedrooms) where.bedrooms[Op.lte] = parseInt(maxBedrooms);
    }
    
    if (postcode) {
      where.postcode = {
        [Op.like]: `${postcode}%`
      };
    }
    
    const properties = await Property.findAll({ where });
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    res.json(property);
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create new property (admin only)
exports.createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update property (admin only)
exports.updateProperty = async (req, res) => {
  try {
    const [updated] = await Property.update(req.body, {
      where: { id: req.params.id }
    });
    
    if (updated) {
      const updatedProperty = await Property.findByPk(req.params.id);
      return res.json(updatedProperty);
    }
    
    res.status(404).json({ error: 'Property not found' });
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete property (admin only)
exports.deleteProperty = async (req, res) => {
  try {
    const deleted = await Property.destroy({
      where: { id: req.params.id }
    });
    
    if (deleted) {
      return res.json({ message: 'Property deleted successfully' });
    }
    
    res.status(404).json({ error: 'Property not found' });
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
