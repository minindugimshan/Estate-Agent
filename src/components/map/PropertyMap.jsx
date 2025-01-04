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
