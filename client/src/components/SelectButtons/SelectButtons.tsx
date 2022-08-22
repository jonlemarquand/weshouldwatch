import React from 'react';

import './SelectButtons.scss';

type SelectOption = {
  text: string;
  value: string;
};

interface SelectButtonProps {
  selectArray: Array<SelectOption>;
  selectValue: string;
  selectValueSetter: Function;
}

const SelectButtons = ({
  selectArray,
  selectValue,
  selectValueSetter,
}: SelectButtonProps) => {
  const selectButtonsRendered = selectArray.map((item: SelectOption) => {
    return (
      <button
        type="button"
        className={`select-button ${
          selectValue === item.value ? 'select-button--active' : ''
        }`}
        key={item.value}
        onClick={() => {
          selectValueSetter(item.value);
        }}
      >
        {item.text}
      </button>
    );
  });

  return <div className="select-buttons">{selectButtonsRendered}</div>;
};

export default SelectButtons;
