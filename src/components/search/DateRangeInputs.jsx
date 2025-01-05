


import { Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

export function DateRangeInputs({ dateAddedAfter, dateAddedBefore, onAfterDateChange, onBeforeDateChange }) {
  return (
    <>
      <Grid item xs={12} sm={6} md={6}>
        <DatePicker
          label="Date Added After"
          value={dateAddedAfter ? dayjs(dateAddedAfter) : null}
          onChange={(newValue) => onAfterDateChange(newValue ? newValue.toISOString() : null)}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <DatePicker
          label="Date Added Before"
          value={dateAddedBefore ? dayjs(dateAddedBefore) : null}
          onChange={(newValue) => onBeforeDateChange(newValue ? newValue.toISOString() : null)}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Grid>
    </>
  );
}

DateRangeInputs.propTypes = {
  dateAddedAfter: PropTypes.string,
  dateAddedBefore: PropTypes.string,
  onAfterDateChange: PropTypes.func.isRequired,
  onBeforeDateChange: PropTypes.func.isRequired,
};
