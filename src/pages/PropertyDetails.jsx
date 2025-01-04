
import { useState } from 'react';
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
} from '@mui/material';
import ImageGallery from 'react-image-gallery';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useFavorites } from '../context/FavoritesContext';
import propertiesData from '../data/properties.json';
import 'react-image-gallery/styles/css/image-gallery.css';

function PropertyDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  
  // Find the property and handle not found case
  const property = propertiesData.properties.find(p => p.id === id)
  const isFavorite = favorites.some(fav => fav.id === property?.id)

  if (!property) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" color="error" gutterBottom>
            Property not found
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
    )
  }

  const images = property.images.map(image => ({
    original: image,
    thumbnail: image,
    originalAlt: property.title,
    thumbnailAlt: property.title,
  }))

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(property.id)
    } else {
      addFavorite(property)
    }
  }

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

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          {property.title}
        </Typography>
        <IconButton 
          onClick={handleFavoriteClick} 
          color="primary"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
        £{property.price.toLocaleString()}
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Description" />
          <Tab label="Floor Plan" />
        </Tabs>

        <Box sx={{ mt: 2, p: 2 }}>
          {activeTab === 0 && (
            <>
              <Typography variant="body1" paragraph>
                {property.longDescription}
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
        </Box>
      </Box>
    </Container>
  )
}

export default PropertyDetails;
