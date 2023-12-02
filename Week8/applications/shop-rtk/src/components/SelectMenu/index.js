import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectMenu = ({ inputLabel, value, onChange, options, ...props }) => {
  return (
    <FormControl variant="outlined" {...props}>
      <InputLabel id={`${inputLabel}-label`}>{inputLabel}</InputLabel>
      <Select
        id={`${inputLabel}-select`}
        value={value}
        label={inputLabel}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectMenu.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectMenu;
