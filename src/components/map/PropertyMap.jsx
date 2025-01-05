// import { Box, Paper, Typography } from '@mui/material'
// import PropTypes from 'prop-types'

// function PropertyMap({ location }) {
//   const [mapError, setMapError] = useState(false)
//   // Since we don't have a valid Google Maps API key, show a fallback
//   return (
//     <Paper 
//       sx={{ 
//         height: 400, 
//         width: '100%', 
//         display: 'flex', 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         bgcolor: '#f5f5f5'
//       }}
//     >
//       <Box sx={{ textAlign: 'center', p: 2 }}>
//         <Typography variant="body1" color="text.secondary" gutterBottom>
//           Location: {location.lat}, {location.lng}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Contact the agent for detailed location information
//         </Typography>
//       </Box>
//     </Paper>
//   )
// }
// PropertyMap.propTypes = {
//   location: PropTypes.shape({
//     lat: PropTypes.number.isRequired,
//     lng: PropTypes.number.isRequired
//   }).isRequired
// }

// export default PropertyMap


// import { useState } from 'react';  // Add this import
// import { Box, Paper, Typography } from '@mui/material';
// import PropTypes from 'prop-types';

// function PropertyMap({ location }) {
//   const [mapError, setMapError] = useState(false);
//   // Since we don't have a valid Google Maps API key, show a fallback
//   return (
//     <Paper 
//       sx={{ 
//         height: 400, 
//         width: '100%', 
//         display: 'flex', 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         bgcolor: '#f5f5f5'
//       }}
//     >
//       <Box sx={{ textAlign: 'center', p: 2 }}>
//         <Typography variant="body1" color="text.secondary" gutterBottom>
//           Location: {location.lat}, {location.lng}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Contact the agent for detailed location information
//         </Typography>
//       </Box>
//     </Paper>
//   );
// }

// PropertyMap.propTypes = {
//   location: PropTypes.shape({
//     lat: PropTypes.number.isRequired,
//     lng: PropTypes.number.isRequired
//   }).isRequired
// };

// export default PropertyMap;


// import { useState } from 'react';  // Add this import
// import { Box, Paper, Typography } from '@mui/material';
// import PropTypes from 'prop-types';

// function PropertyMap({ location }) {
//   const [mapError, setMapError] = useState(false);

//   if (location.mapEmbedUrl) {
//     return (
//       <Paper 
//         sx={{ 
//           height: 450, 
//           width: '100%', 
//           display: 'flex', 
//           justifyContent: 'center', 
//           alignItems: 'center' 
//         }}
//       >
//         <iframe
//           src={location.mapEmbedUrl}
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
//       </Paper>
//     );
//   }

//   return (
//     <Paper 
//       sx={{ 
//         height: 400, 
//         width: '100%', 
//         display: 'flex', 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         bgcolor: '#f5f5f5'
//       }}
//     >
//       <Box sx={{ textAlign: 'center', p: 2 }}>
//         <Typography variant="body1" color="text.secondary" gutterBottom>
//           Location: {location.lat}, {location.lng}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Contact the agent for detailed location information
//         </Typography>
//       </Box>
//     </Paper>
//   );
// }



import PropTypes from 'prop-types';
import { Box, Paper } from '@mui/material';

const PropertyMap = ({ location }) => {
  return (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <Paper elevation={3}>
        <iframe
          src={location.mapEmbedUrl}
          width="600"
          height="450"
          style={{ border: 0, width: '100%', maxHeight: '400px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Property Location"
        />
      </Paper>
    </Box>
  );
};

PropertyMap.propTypes = {
  location: PropTypes.shape({
    mapEmbedUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyMap;
