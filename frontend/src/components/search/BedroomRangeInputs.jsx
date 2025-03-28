
import { Grid, TextField } from '@mui/material';
import PropTypes from 'prop-types';

export function BedroomRangeInputs({ minBedrooms, maxBedrooms, onMinBedroomsChange, onMaxBedroomsChange }) {
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          fullWidth
          label="Min Bedrooms"
          type="number"
          value={minBedrooms}
          onChange={onMinBedroomsChange}
          inputProps={{ min: 0 }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          fullWidth
          label="Max Bedrooms"
          type="number"
          value={maxBedrooms}
          onChange={onMaxBedroomsChange}
          inputProps={{ min: 0 }}
        />
      </Grid>
    </>
  );
}

BedroomRangeInputs.propTypes = {
  minBedrooms: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxBedrooms: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onMinBedroomsChange: PropTypes.func.isRequired,
  onMaxBedroomsChange: PropTypes.func.isRequired,
};
