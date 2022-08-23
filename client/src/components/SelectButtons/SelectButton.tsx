import React from 'react';

interface SelectButtonProps {
  text: string;
  value: string;
  clickAction: Function;
  active: boolean;
}

const SelectButton = ({
  text,
  value,
  clickAction,
  active,
}: SelectButtonProps) => {
  const buttonClass = active
    ? `select-button select-button--active`
    : 'select-button';

  return (
    <button
      type="button"
      className={buttonClass}
      key={value}
      onClick={() => {
        clickAction(value);
      }}
    >
      {text}
    </button>
  );
};

export default SelectButton;
