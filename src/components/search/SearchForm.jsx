


import { useState } from 'react';
import { TextField, Grid, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { PropertyTypeSelect } from './PropertyTypeSelect';
import { PriceRangeInputs } from './PriceRangeInputs';
import { BedroomRangeInputs } from './BedroomRangeInputs';
import { DateRangeInputs } from './DateRangeInputs';

function SearchForm({ onSearch }) {
  const [criteria, setCriteria] = useState({
    type: 'any',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAddedAfter: null,
    dateAddedBefore: null,
    postcode: '',
  });

  const handleChange = (field) => (event) => {
    setCriteria({
      ...criteria,
      [field]: event.target.value,
    });
  };

  const handleNumberChange = (field) => (event) => {
    setCriteria({
      ...criteria,
      [field]: event.target.value,
    });
  };

  const handleDateChange = (field) => (date) => {
    setCriteria({
      ...criteria,
      [field]: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <Grid container spacing={3}>
        <PropertyTypeSelect value={criteria.type} onChange={handleChange('type')} />
        <PriceRangeInputs
          minPrice={criteria.minPrice}
          maxPrice={criteria.maxPrice}
          onMinPriceChange={handleNumberChange('minPrice')}
          onMaxPriceChange={handleNumberChange('maxPrice')}
        />
        <BedroomRangeInputs
          minBedrooms={criteria.minBedrooms}
          maxBedrooms={criteria.maxBedrooms}
          onMinBedroomsChange={handleNumberChange('minBedrooms')}
          onMaxBedroomsChange={handleNumberChange('maxBedrooms')}
        />
        <DateRangeInputs
          dateAddedAfter={criteria.dateAddedAfter}
          dateAddedBefore={criteria.dateAddedBefore}
          onAfterDateChange={handleDateChange('dateAddedAfter')}
          onBeforeDateChange={handleDateChange('dateAddedBefore')}
        />
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Postcode Area"
            value={criteria.postcode}
            onChange={handleChange('postcode')}
            placeholder="e.g. BR1, NW1"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Search Properties
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;