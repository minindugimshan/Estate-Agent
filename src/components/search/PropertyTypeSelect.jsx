


import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

export function PropertyTypeSelect({ value, onChange }) {
  const propertyTypes = ["any", "house", "flat"]; // Default options

  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl fullWidth>
        <InputLabel>Property Type</InputLabel>
        <Select
          value={value || "any"}  // Default to "any" if value is undefined
          onChange={onChange}
          label="Property Type"
        >
          {propertyTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitalize first letter */}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

// Prop Types Validation
PropertyTypeSelect.propTypes = {
  value: PropTypes.string.isRequired,  // Ensures value is a string and required
  onChange: PropTypes.func.isRequired,  // Ensures onChange is a function and required
};

export default PropertyTypeSelect;
