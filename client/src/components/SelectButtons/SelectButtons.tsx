import React from 'react';

import SelectButton from './SelectButton';

import './SelectButtons.scss';

type SelectOption = {
  text: string;
  value: string;
  active: boolean;
};

interface SelectButtonProps {
  selectArray: Array<SelectOption>;
  selectValueSetter: Function;
}

const SelectButtons = ({
  selectArray,
  selectValueSetter,
}: SelectButtonProps) => {
  const selectButtonsRendered = selectArray.map((item: SelectOption) => {
    return (
      <SelectButton
        text={item.text}
        value={item.value}
        clickAction={selectValueSetter}
        active={item.active}
      />
    );
  });

  return (
    <div
      className={`select-buttons ${
        selectArray.length > 2 ? 'select-buttons-grid' : 'select-buttons-2'
      }`}
    >
      {selectButtonsRendered}
    </div>
  );
};

export default SelectButtons;
