// import { useState } from 'react';
// import { Container, Grid, Typography, Box } from '@mui/material';
// import SearchForm from '../components/search/SearchForm';
// import PropertyCard from '../components/property/PropertyCard';
// import FavoritesList from '../components/favorites/FavoritesList';
// import { properties } from '../data/mockProperties';
// import { filterProperties } from '../utils/propertyFilters';

// function SearchPage() {
//   const [searchResults, setSearchResults] = useState(properties)

//   const handleSearch = (criteria) => {
//     const filteredProperties = filterProperties(properties, criteria)
//     setSearchResults(filteredProperties)
//   }

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={9}>
//           <Typography variant="h4" component="h1" gutterBottom>
//             Search Properties
//           </Typography>
//           <SearchForm onSearch={handleSearch} />
          
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h5" component="h2" gutterBottom>
//               {searchResults.length} Properties Found
//             </Typography>
//             <Grid container spacing={3}>
//               {searchResults.map(property => (
//                 <Grid item xs={12} sm={6} md={4} key={property.id}>
//                   <PropertyCard property={property} />
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Grid>
        
//         <Grid item xs={12} md={3}>
//           <FavoritesList />
//         </Grid>
//       </Grid>
//     </Container>
//   )
// }

// export default SearchPage


// import { useState } from 'react';
// import { Container, Grid, Typography, Box, Collapse, Button } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import SearchBox from '../components/SearchBox/SearchBox'; // Adjust the import path as needed
// import SearchForm from '../components/search/SearchForm';
// import PropertyCard from '../components/property/PropertyCard';
// import FavoritesList from '../components/favorites/FavoritesList';
// import { properties } from '../data/mockProperties';
// import { filterProperties } from '../utils/propertyFilters';

// function SearchPage() {
//   const [searchResults, setSearchResults] = useState(properties);
//   const [isSearchVisible, setIsSearchVisible] = useState(false);

//   const handleSearch = (criteria) => {
//     const filteredProperties = filterProperties(properties, criteria);
//     setSearchResults(filteredProperties);
//   };

//   const toggleSearch = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       {/* Search Box Component */}
//       <SearchBox />

//       {/* Collapsible Advanced Search Section */}
//       <Box sx={{ mb: 4 }}>
//         <Button
//           onClick={toggleSearch}
//           endIcon={isSearchVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           sx={{ mb: 2 }}
//         >
//           Advanced Search
//         </Button>
//         <Collapse in={isSearchVisible}>
//           <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
//             <SearchForm onSearch={handleSearch} />
//           </Box>
//         </Collapse>
//       </Box>

//       {/* Results Count */}
//       <Typography variant="h6" sx={{ mb: 3 }}>
//         {searchResults.length} Properties Found
//       </Typography>

//       {/* Property Grid */}
//       <Grid container spacing={3}>
//         {searchResults.map(property => (
//           <Grid item xs={12} sm={6} md={4} key={property.id}>
//             <PropertyCard property={property} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default SearchPage;


// import { useState } from 'react';
// import { Container, Grid, Typography, Box, Collapse, Button } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Hero from '../components/Hero/Hero'; // Adjust path as needed
// import SearchForm from '../components/search/SearchForm';
// import PropertyCard from '../components/property/PropertyCard';
// import FavoritesList from '../components/favorites/FavoritesList';
// import { properties } from '../data/mockProperties';
// import { filterProperties } from '../utils/propertyFilters';

// function SearchPage() {
//  const [searchResults, setSearchResults] = useState(properties);
//  const [isSearchVisible, setIsSearchVisible] = useState(false);

//  const handleSearch = (criteria) => {
//    const filteredProperties = filterProperties(properties, criteria);
//    setSearchResults(filteredProperties);
//  };

//  const toggleSearch = () => {
//    setIsSearchVisible(!isSearchVisible);
//  };

//  return (
//    <div>
//      {/* Hero Section */}
//      <Hero />
     
//      <Container maxWidth="lg" sx={{ py: 4 }}>
//        {/* Collapsible Advanced Search Section */}
//        <Box sx={{ mb: 4 }}>
//          <Button
//            onClick={toggleSearch}
//            endIcon={isSearchVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//            sx={{ mb: 2 }}
//          >
//            Advanced Search
//          </Button>
//          <Collapse in={isSearchVisible}>
//            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
//              <SearchForm onSearch={handleSearch} />
//            </Box>
//          </Collapse>
//        </Box>

//        {/* Results Count */}
//        <Typography variant="h6" sx={{ mb: 3 }}>
//          {searchResults.length} Properties Found
//        </Typography>

//        {/* Property Grid */}
//        <Grid container spacing={3}>
//          {searchResults.map(property => (
//            <Grid item xs={12} sm={6} md={4} key={property.id}>
//              <PropertyCard property={property} />
//            </Grid>
//          ))}
//        </Grid>
//      </Container>
//    </div>
//  );
// }

// export default SearchPage;


import { useState } from 'react';
import { Container, Grid, Typography, Box, Collapse, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Hero from '../components/Hero/Hero';
import SearchForm from '../components/search/SearchForm';
import PropertyCard from '../components/property/PropertyCard';
import FavoritesList from '../components/favorites/FavoritesList';
import { properties } from '../data/mockProperties';
import { filterProperties } from '../utils/propertyFilters';

function SearchPage() {
  const [searchResults, setSearchResults] = useState(properties);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = (criteria) => {
    const filteredProperties = filterProperties(properties, criteria);
    setSearchResults(filteredProperties);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
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

            {/* Property Grid */}
            <Grid container spacing={3}>
              {searchResults.map(property => (
                <Grid item xs={12} sm={6} key={property.id}>
                  <PropertyCard property={property} />
                </Grid>
              ))}
            </Grid>
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
  );
}

export default SearchPage;