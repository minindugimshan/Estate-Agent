import { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import SearchForm from '../components/search/SearchForm';
import PropertyCard from '../components/property/PropertyCard';
import FavoritesList from '../components/favorites/FavoritesList';
import { properties } from '../data/mockProperties';
import { filterProperties } from '../utils/propertyFilters';

function SearchPage() {
  const [searchResults, setSearchResults] = useState(properties)

  const handleSearch = (criteria) => {
    const filteredProperties = filterProperties(properties, criteria)
    setSearchResults(filteredProperties)
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Typography variant="h4" component="h1" gutterBottom>
            Search Properties
          </Typography>
          <SearchForm onSearch={handleSearch} />
          
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {searchResults.length} Properties Found
            </Typography>
            <Grid container spacing={3}>
              {searchResults.map(property => (
                <Grid item xs={12} sm={6} md={4} key={property.id}>
                  <PropertyCard property={property} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <FavoritesList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default SearchPage