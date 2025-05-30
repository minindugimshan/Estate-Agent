

// import { useState } from 'react';
// import { Container, Grid, Typography, Box, Collapse, Button } from '@mui/material';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Hero from '../components/Hero/Hero';
// import SearchForm from '../components/search/SearchForm';
// import PropertyCard from '../components/property/PropertyCard';
// import FavoritesList from '../components/favorites/FavoritesList';
// import { properties } from '../data/mockProperties';
// import { filterProperties } from '../utils/propertyFilters';
// import { useFavorites } from '../context/FavoritesContext';

// function SearchPage() {
//   const [searchResults, setSearchResults] = useState(properties);
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const { addFavorite } = useFavorites();

//   const handleSearch = (criteria) => {
//     const filteredProperties = filterProperties(properties, criteria);
//     setSearchResults(filteredProperties);
//   };

//   const toggleSearch = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };

//   const handleDragEnd = (result) => {
//     console.log('Drag result:', result);

//     if (!result.destination) return;

//     const { source, destination, draggableId } = result;

//     if (source.droppableId === 'searchResults' && destination.droppableId === 'favorites') {
//       const property = searchResults.find(p => p.id === draggableId);
//       if (property) {
//         addFavorite(property);
//       }
//     }
//   };

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <div>
//         <Hero />
        
//         <Container maxWidth="lg" sx={{ py: 4 }}>
//           <Grid container spacing={3}>
//             {/* Main Content Area */}
//             <Grid item xs={12} md={8}>
//               {/* Advanced Search Section */}
//               <Box sx={{ mb: 4 }}>
//                 <Button
//                   onClick={toggleSearch}
//                   endIcon={isSearchVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                   sx={{ mb: 2 }}
//                 >
//                   Advanced Search
//                 </Button>
//                 <Collapse in={isSearchVisible}>
//                   <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
//                     <SearchForm onSearch={handleSearch} />
//                   </Box>
//                 </Collapse>
//               </Box>

//               {/* Results Count */}
//               <Typography variant="h6" sx={{ mb: 3 }}>
//                 {searchResults.length} Properties Found
//               </Typography>

//               {/* Property Grid with Droppable */}
//               <Droppable droppableId="searchResults">
//                 {(provided) => (
//                   <Box
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                     sx={{ minHeight: '100px' }}
//                   >
//                     <Grid container spacing={3}>
//                       {searchResults.map((property, index) => (
//                         <Grid item xs={12} sm={6} key={property.id}>
//                           <PropertyCard property={property} index={index} />
//                         </Grid>
//                       ))}
//                     </Grid>
//                     {provided.placeholder}
//                   </Box>
//                 )}
//               </Droppable>
//             </Grid>

//             {/* Favorites Sidebar */}
//             <Grid item xs={12} md={4}>
//               <Box sx={{ position: { md: 'sticky' }, top: { md: '20px' } }}>
//                 <FavoritesList />
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </div>
//     </DragDropContext>
//   );
// }

// export default SearchPage;

import { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Collapse, 
  Button,
  CircularProgress
} from '@mui/material';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Hero from '../components/Hero/Hero';
import SearchForm from '../components/search/SearchForm';
import PropertyCard from '../components/property/PropertyCard';
import FavoritesList from '../components/favorites/FavoritesList';
import api from '../../services/api'; // Adjust the import based on your project structure
import { useSnackbar } from 'notistack';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await api.get('/properties', { params: filters });
        setSearchResults(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch properties');
        enqueueSnackbar('Error fetching properties', { variant: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [filters, enqueueSnackbar]);

  const handleSearch = (criteria) => {
    // Convert empty strings to undefined to avoid sending empty params
    const cleanedCriteria = Object.fromEntries(
      Object.entries(criteria).map(([key, value]) => 
        [key, value === '' ? undefined : value]
      )
    );
    setFilters(cleanedCriteria);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    if (source.droppableId === 'searchResults' && destination.droppableId === 'favorites') {
      try {
        await api.post(`/favorites/${draggableId}`);
        enqueueSnackbar('Property added to favorites', { variant: 'success' });
      } catch (error) {
        enqueueSnackbar('Failed to add favorite', { variant: 'error' });
        console.error('Error adding favorite:', error);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div>
        <Hero />
        
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={3}>
            {/* Main Content Area */}
            <Grid item xs={12} md={8}>
              {/* Advanced Search Section */}
              <Box sx={{ mb: 4 }}>
                <Button
                  onClick={toggleSearch}
                  endIcon={isSearchVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  sx={{ mb: 2 }}
                >
                  Advanced Search
                </Button>
                <Collapse in={isSearchVisible}>
                  <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
                    <SearchForm onSearch={handleSearch} />
                  </Box>
                </Collapse>
              </Box>

              {/* Results Count */}
              <Typography variant="h6" sx={{ mb: 3 }}>
                {searchResults.length} Properties Found
              </Typography>

              {/* Loading State */}
              {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                  <CircularProgress />
                </Box>
              )}

              {/* Error State */}
              {error && !loading && (
                <Typography color="error" sx={{ mb: 3 }}>
                  {error}
                </Typography>
              )}

              {/* Property Grid with Droppable */}
              {!loading && !error && (
                <Droppable droppableId="searchResults">
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{ minHeight: '100px' }}
                    >
                      <Grid container spacing={3}>
                        {searchResults.map((property, index) => (
                          <Grid item xs={12} sm={6} key={property.id}>
                            <PropertyCard property={property} index={index} />
                          </Grid>
                        ))}
                      </Grid>
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              )}
            </Grid>

            {/* Favorites Sidebar */}
            <Grid item xs={12} md={4}>
              <Box sx={{ position: { md: 'sticky' }, top: { md: '20px' } }}>
                <FavoritesList />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </DragDropContext>
  );
}

export default SearchPage;