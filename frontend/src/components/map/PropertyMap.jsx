
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
