
// import { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   Tabs,
//   Tab,
//   Box,
//   Paper,
//   IconButton,
//   Button,
// } from '@mui/material';
// import ImageGallery from 'react-image-gallery';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useFavorites } from '../../context/FavoritesContext';
// import propertiesData from '../../data/properties.json';
// import 'react-image-gallery/styles/css/image-gallery.css';
// import './PropertyDetails.css';

// function PropertyDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState(0);
//   const { favorites, addFavorite, removeFavorite } = useFavorites();

//   // Find the property and handle not found case
//   const property = propertiesData.properties.find((p) => p.id === id);
//   const isFavorite = favorites.some((fav) => fav.id === property?.id);

//   if (!property) {
//     return (
//       <Container maxWidth="lg" sx={{ mt: 4 }}>
//         <Box sx={{ textAlign: 'center' }}>
//           <Typography variant="h5" color="error" gutterBottom>
//             Property not found
//           </Typography>
//           <Button
//             startIcon={<ArrowBackIcon />}
//             onClick={() => navigate('/')}
//             variant="contained"
//           >
//             Back to Search
//           </Button>
//         </Box>
//       </Container>
//     );
//   }

//   const images = property.images.map((image) => ({
//     original: image,
//     thumbnail: image,
//     originalAlt: property.title,
//     thumbnailAlt: property.title,
//   }));

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   const handleFavoriteClick = () => {
//     if (isFavorite) {
//       removeFavorite(property.id);
//     } else {
//       addFavorite(property);
//     }
//   };

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       <Box sx={{ mb: 2 }}>
//         <Button
//           startIcon={<ArrowBackIcon />}
//           onClick={() => navigate('/')}
//           variant="text"
//         >
//           Back to Search
//         </Button>
//       </Box>

//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           mb: 3,
//         }}
//       >
//         <Typography variant="h4" component="h1">
//           {property.title}
//         </Typography>
//         <IconButton
//           onClick={handleFavoriteClick}
//           color="primary"
//           aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
//         >
//           {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//         </IconButton>
//       </Box>

//       <Paper elevation={3} sx={{ mb: 3 }}>
//         <ImageGallery
//           items={images}
//           showPlayButton={false}
//           showFullscreenButton={true}
//           showNav={true}
//           lazyLoad={true}
//         />
//       </Paper>

//       <Typography variant="h5" color="primary" gutterBottom>
//         ${property.price.toLocaleString()}
//       </Typography>

//       <Box sx={{ mb: 3 }}>
//         <Tabs value={activeTab} onChange={handleTabChange}>
//           <Tab label="Description" />
//           <Tab label="Floor Plan" />
//           <Tab label="Location" />
//         </Tabs>

//         <Box sx={{ mt: 2, p: 2 }}>
//           {activeTab === 0 && (
//             <>
//               <Typography variant="body1" paragraph>
//                 {property.longDescription || 'No description available for this property.'}
//               </Typography>
//               <Box sx={{ mt: 2 }}>
//                 <Typography variant="subtitle1" gutterBottom>
//                   Property Details:
//                 </Typography>
//                 <Typography>• {property.bedrooms} bedrooms</Typography>
//                 <Typography>• {property.type}</Typography>
//                 <Typography>• {property.postcode}</Typography>
//               </Box>
//             </>
//           )}
//           {activeTab === 1 && property.floorPlan && (
//             <Box sx={{ textAlign: 'center' }}>
//               <img
//                 src={property.floorPlan}
//                 alt="Floor Plan"
//                 style={{ maxWidth: '100%', height: 'auto' }}
//               />
//             </Box>
//           )}
//           {activeTab === 2 && (
//             <Box sx={{ textAlign: 'center' }}>
//               {property.iframe ? (
//                 <iframe
//                   src={property.iframe}
//                   title="Property Location"
//                   width="100%"
//                   height="400px"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                 ></iframe>
//               ) : (
//                 <Typography variant="body2">
//                   No location map available for this property.
//                 </Typography>
//               )}
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default PropertyDetails;



import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
  Paper,
  IconButton,
  Button,
  CircularProgress
} from '@mui/material';
import ImageGallery from 'react-image-gallery';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import api from '../';
import 'react-image-gallery/styles/css/image-gallery.css';
import './PropertyDetails.css';

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favLoading, setFavLoading] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const [propertyRes, favoritesRes] = await Promise.all([
          api.get(`/properties/${id}`),
          api.get('/favorites')
        ]);
        
        setProperty(propertyRes.data);
        setIsFavorite(favoritesRes.data.some(fav => fav.id === id));
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch property');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFavoriteClick = async () => {
    if (favLoading) return;
    
    setFavLoading(true);
    try {
      if (isFavorite) {
        await api.delete(`/favorites/${id}`);
      } else {
        await api.post(`/favorites/${id}`);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error updating favorite:', error);
    } finally {
      setFavLoading(false);
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !property) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" color="error" gutterBottom>
            {error || 'Property not found'}
          </Typography>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            variant="contained"
          >
            Back to Search
          </Button>
        </Box>
      </Container>
    );
  }

  const images = property.images?.map(image => ({
    original: image.image_url,
    thumbnail: image.image_url,
    originalAlt: property.title,
    thumbnailAlt: property.title,
  })) || [];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          variant="text"
        >
          Back to Search
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1">
          {property.title}
        </Typography>
        <IconButton
          onClick={handleFavoriteClick}
          color="primary"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
        {favLoading ? <CircularProgress size={24} /> : 
          isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>

      <Paper elevation={3} sx={{ mb: 3 }}>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          showNav={true}
          lazyLoad={true}
        />
      </Paper>

      <Typography variant="h5" color="primary" gutterBottom>
        ${property.price.toLocaleString()}
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Description" />
          <Tab label="Floor Plan" />
          <Tab label="Location" />
        </Tabs>

        <Box sx={{ mt: 2, p: 2 }}>
          {activeTab === 0 && (
            <>
              <Typography variant="body1" paragraph>
                {property.longDescription || 'No description available for this property.'}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Property Details:
                </Typography>
                <Typography>• {property.bedrooms} bedrooms</Typography>
                <Typography>• {property.type}</Typography>
                <Typography>• {property.postcode}</Typography>
              </Box>
            </>
          )}
          {activeTab === 1 && property.floorPlan && (
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={property.floorPlan}
                alt="Floor Plan"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          )}
          {activeTab === 2 && (
            <Box sx={{ textAlign: 'center' }}>
              {property.iframe ? (
                <iframe
                  src={property.iframe}
                  title="Property Location"
                  width="100%"
                  height="400px"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              ) : (
                <Typography variant="body2">
                  No location map available for this property.
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default PropertyDetails;
