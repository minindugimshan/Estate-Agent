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
          value={minBedrooms || ''}
          onChange={(e) => onMinBedroomsChange(Number(e.target.value) || null)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          fullWidth
          label="Max Bedrooms"
          type="number"
          value={maxBedrooms || ''}
          onChange={(e) => onMaxBedroomsChange(Number(e.target.value) || null)}
        />
      </Grid>
    </>
  );
}

BedroomRangeInputs.propTypes = {
  minBedrooms: PropTypes.number,
  maxBedrooms: PropTypes.number,
  onMinBedroomsChange: PropTypes.func.isRequired,
  onMaxBedroomsChange: PropTypes.func.isRequired,
};
