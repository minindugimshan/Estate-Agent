
import { Grid, TextField } from '@mui/material';
import PropTypes from 'prop-types';

export function PriceRangeInputs({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) {
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          fullWidth
          label="Min Price"
          type="number"
          value={minPrice}
          onChange={onMinPriceChange}
          inputProps={{ min: 0 }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          fullWidth
          label="Max Price"
          type="number"
          value={maxPrice}
          onChange={onMaxPriceChange}
          inputProps={{ min: 0 }}
        />
      </Grid>
    </>
  );
}

PriceRangeInputs.propTypes = {
  minPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onMinPriceChange: PropTypes.func.isRequired,
  onMaxPriceChange: PropTypes.func.isRequired,
};