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
          value={minPrice || ''}
          onChange={(e) => onMinPriceChange(Number(e.target.value) || null)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          fullWidth
          label="Max Price"
          type="number"
          value={maxPrice || ''}
          onChange={(e) => onMaxPriceChange(Number(e.target.value) || null)}
        />
      </Grid>
    </>
  );
}

PriceRangeInputs.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  onMinPriceChange: PropTypes.func.isRequired,
  onMaxPriceChange: PropTypes.func.isRequired,
};


