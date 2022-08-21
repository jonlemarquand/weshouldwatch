import React from 'react';

import './Button.scss';

interface ButtonProp {
  buttonText: string;
  extraClass?: string;
  useLink: boolean;
  linkAddress?: string;
}

const Button = ({
  buttonText,
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
    <button className={`button ${extraClass}`} type="button">
      {buttonText}
    </button>
  );
};

Button.defaultProps = {
  extraClass: '',
  linkAddress: '/',
};

export default Button;
