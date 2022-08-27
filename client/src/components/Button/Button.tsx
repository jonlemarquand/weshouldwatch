import React from 'react';

import './Button.scss';

interface ButtonProp {
  buttonText: string;
  buttonValue?: any;
  buttonAction?: Function | null;
  extraClass?: string;
  useLink: boolean;
  linkAddress?: string;
}

const Button = ({
  buttonText,
  buttonAction,
  buttonValue,
  extraClass,
  useLink,
  linkAddress,
}: ButtonProp) => {
  if (useLink) {
    return (
      <a className={`button ${extraClass}`} href={linkAddress}>
        {buttonText}
      </a>
    );
  }
  return (
    <button
      className={`button ${extraClass}`}
      type="button"
      onClick={() => {
        if (buttonAction) {
          buttonAction(buttonValue);
        }
      }}
    >
      {buttonText}
    </button>
  );
};

Button.defaultProps = {
  extraClass: '',
  linkAddress: '/',
  buttonAction: null,
  buttonValue: null,
};

export default Button;
