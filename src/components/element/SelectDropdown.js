import React from 'react';
import Select from 'react-select';

const SelectDropdown = React.forwardRef(function SelectDropdownt(
  { defaultValue, onChange, styles, options, ...rest },
  ref,
) {
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      fontSize: '14px',
      textTransform: 'capitalize',
    }),

    placeholder: (provided) => ({
      ...provided,
      color: '#212120',
    }),

    control: (provided, state) => ({
      ...provided,
      fontSize: '16px',
      background: 'transparent',
      border: 0,
      boxShadow: 0,
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      color: '#111',
      textTransform: 'capitalize',
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#1C9FDA'
        : state.isFocused
        ? '#def5ff'
        : '',
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      styles={customStyles}
      options={options}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
});

export default SelectDropdown;
