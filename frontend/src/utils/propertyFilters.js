// Property filtering utilities
export const filterProperties = (properties, criteria) => {
    return properties.filter(property => {
      // Type filter
      if (criteria.type !== 'any' && property.type.toLowerCase() !== criteria.type.toLowerCase()) {
        return false
      }
  
      // Price filter
      if (criteria.minPrice && property.price < parseInt(criteria.minPrice)) {
        return false
      }
      if (criteria.maxPrice && property.price > parseInt(criteria.maxPrice)) {
        return false
      }
  
      // Bedrooms filter
      if (criteria.minBedrooms && property.bedrooms < parseInt(criteria.minBedrooms)) {
        return false
      }
      if (criteria.maxBedrooms && property.bedrooms > parseInt(criteria.maxBedrooms)) {
        return false
      }
  
      // Date filter
      if (criteria.dateAddedAfter) {
        const propertyDate = new Date(property.dateAdded)
        if (propertyDate < criteria.dateAddedAfter) {
          return false
        }
      }
      if (criteria.dateAddedBefore) {
        const propertyDate = new Date(property.dateAdded)
        if (propertyDate > criteria.dateAddedBefore) {
          return false
        }
      }
  
      // Postcode filter
      if (criteria.postcode && !property.postcode.toLowerCase().startsWith(criteria.postcode.toLowerCase())) {
        return false
      }
  
      return true
    })
  }