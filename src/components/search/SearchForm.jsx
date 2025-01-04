// // src/components/SearchForm.jsx
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import './SearchForm.css'

// const SearchForm = ({ onSearch }) => {
//   const [criteria, setCriteria] = useState({
//     type: "any",
//     minPrice: "",
//     maxPrice: "",
//     minBedrooms: "",
//     maxBedrooms: "",
//     dateAfter: null,
//     postcode: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(criteria);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCriteria(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="search-form">
//       <div className="form-group">
//         <label htmlFor="type">Property Type</label>
//         <select
//           id="type"
//           name="type"
//           value={criteria.type}
//           onChange={handleChange}
//           className="form-control"
//         >
//           <option value="any">Any Type</option>
//           <option value="house">House</option>
//           <option value="flat">Flat</option>
//         </select>
//       </div>

//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="minPrice">Min Price</label>
//           <input
//             type="number"
//             id="minPrice"
//             name="minPrice"
//             value={criteria.minPrice}
//             onChange={handleChange}
//             className="form-control"
//             min="0"
//             step="1000"
//             placeholder="Min Price"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="maxPrice">Max Price</label>
//           <input
//             type="number"
//             id="maxPrice"
//             name="maxPrice"
//             value={criteria.maxPrice}
//             onChange={handleChange}
//             className="form-control"
//             min="0"
//             step="1000"
//             placeholder="Max Price"
//           />
//         </div>
//       </div>

//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="minBedrooms">Min Bedrooms</label>
//           <input
//             type="number"
//             id="minBedrooms"
//             name="minBedrooms"
//             value={criteria.minBedrooms}
//             onChange={handleChange}
//             className="form-control"
//             min="0"
//             max="10"
//             placeholder="Min Bedrooms"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="maxBedrooms">Max Bedrooms</label>
//           <input
//             type="number"
//             id="maxBedrooms"
//             name="maxBedrooms"
//             value={criteria.maxBedrooms}
//             onChange={handleChange}
//             className="form-control"
//             min="0"
//             max="10"
//             placeholder="Max Bedrooms"
//           />
//         </div>
//       </div>

//       <div className="form-group">
//         <label>Date Added After</label>
//         <DatePicker
//           selected={criteria.dateAfter}
//           onChange={(date) => setCriteria(prev => ({ ...prev, dateAfter: date }))}
//           className="form-control"
//           placeholderText="Select Date"
//           dateFormat="dd/MM/yyyy"
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="postcode">Postcode Area</label>
//         <input
//           type="text"
//           id="postcode"
//           name="postcode"
//           value={criteria.postcode}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="e.g. BR1, NW1"
//         />
//       </div>

//       <button type="submit" className="search-button">
//         Search Properties
//       </button>
//     </form>
//   );
// };

// export default SearchForm;




// boalt

// import { useState } from 'react';
// import {
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Grid,
//   Button,
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';
// import { PropertyTypeSelect } from './PropertyTypeSelect';
// import { PriceRangeInputs } from './PriceRangeInputs';
// import { BedroomRangeInputs } from './BedroomRangeInputs';
// import { DateRangeInputs } from './DateRangeInputs';

// function SearchForm({ onSearch }) {
//   const [criteria, setCriteria] = useState({
//     type: 'any',
//     minPrice: '',
//     maxPrice: '',
//     minBedrooms: '',
//     maxBedrooms: '',
//     dateAddedAfter: null,
//     dateAddedBefore: null,
//     postcode: '',
//   })

//   const handleChange = (field) => (event) => {
//     setCriteria({
//       ...criteria,
//       [field]: event.target.value,
//     })
//   }

//   const handleDateChange = (field) => (date) => {
//     setCriteria({
//       ...criteria,
//       [field]: date,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onSearch(criteria)
//   }

//   return (
//     <form onSubmit={handleSubmit} className="search-form">
//       <Grid container spacing={3}>
//         <PropertyTypeSelect value={criteria.type} onChange={handleChange('type')} />
//         <PriceRangeInputs
//           minPrice={criteria.minPrice}
//           maxPrice={criteria.maxPrice}
//           onMinPriceChange={handleChange('minPrice')}
//           onMaxPriceChange={handleChange('maxPrice')}
//         />
//         <BedroomRangeInputs
//           minBedrooms={criteria.minBedrooms}
//           maxBedrooms={criteria.maxBedrooms}
//           onMinBedroomsChange={handleChange('minBedrooms')}
//           onMaxBedroomsChange={handleChange('maxBedrooms')}
//         />
//         <DateRangeInputs
//           dateAddedAfter={criteria.dateAddedAfter}
//           dateAddedBefore={criteria.dateAddedBefore}
//           onAfterDateChange={handleDateChange('dateAddedAfter')}
//           onBeforeDateChange={handleDateChange('dateAddedBefore')}
//         />
//         <Grid item xs={12} sm={6} md={4}>
//           <TextField
//             fullWidth
//             label="Postcode Area"
//             value={criteria.postcode}
//             onChange={handleChange('postcode')}
//             placeholder="e.g. BR1, NW1"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             size="large"
//           >
//             Search Properties
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   )
// }

// export default SearchForm

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
          onMinPriceChange={handleChange('minPrice')}
          onMaxPriceChange={handleChange('maxPrice')}
        />
        <BedroomRangeInputs
          minBedrooms={criteria.minBedrooms}
          maxBedrooms={criteria.maxBedrooms}
          onMinBedroomsChange={handleChange('minBedrooms')}
          onMaxBedroomsChange={handleChange('maxBedrooms')}
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

// Prop Types Validation
SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired, // Ensures onSearch is a required function
};

export default SearchForm;
