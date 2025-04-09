
// import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useFavorites } from '../../context/FavoritesContext';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import PropTypes from 'prop-types';
// import "./property.css";

// function PropertyCard({ property }) {
//   const { favorites, addFavorite, removeFavorite } = useFavorites();
//   const isFavorite = favorites.some((fav) => fav.id === property.id);

//   const handleFavoriteClick = (e) => {
//     e.preventDefault(); // Prevent navigation if clicked
//     if (isFavorite) {
//       removeFavorite(property.id);
//     } else {
//       addFavorite(property);
//     }
//   };

//   return (
//     <Card className="property-card">
//       <Link to={`/property/${property.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           image={property.images[0]}
//           alt={property.title}
//         />
//         <CardContent>
//           <Typography variant="h6" component="div">
//             {property.title}
//           </Typography>
//           <Typography variant="subtitle1" color="primary">
//             ${property.price.toLocaleString()}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {property.shortDescription}
//           </Typography>
//           <Typography variant="body2">
//             {property.bedrooms} bedrooms • {property.type} • {property.postcode}
//           </Typography>
//         </CardContent>
//       </Link>
//       <IconButton
//         onClick={handleFavoriteClick}
//         className="favorite-button"
//         color="primary"
//       >
//         {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//       </IconButton>
//     </Card>
//   );
// }

// PropertyCard.propTypes = {
//   property: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     shortDescription: PropTypes.string.isRequired,
//     bedrooms: PropTypes.number.isRequired,
//     type: PropTypes.string.isRequired,
//     postcode: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default PropertyCard;



import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';
import api from '../../api';
import "./property.css";

function PropertyCard({ property }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFavoriteClick = async (e) => {
    e.preventDefault();
    if (loading) return;
    
    setLoading(true);
    try {
      if (isFavorite) {
        await api.delete(`/favorites/${property.id}`);
      } else {
        await api.post(`/favorites/${property.id}`);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error updating favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="property-card">
      <Link to={`/property/${property.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="200"
          image={property.images?.[0]?.image_url || '/default-property.jpg'}
          alt={property.title}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {property.title}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            ${property.price.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {property.short_description}
          </Typography>
          <Typography variant="body2">
            {property.bedrooms} bedrooms • {property.type} • {property.postcode}
          </Typography>
        </CardContent>
      </Link>
      <IconButton
        onClick={handleFavoriteClick}
        className="favorite-button"
        color="primary"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 
         isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Card>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      image_url: PropTypes.string.isRequired
    })),
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    short_description: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;