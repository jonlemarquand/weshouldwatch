import React from 'react';

import './Button.scss';

interface ButtonProp {
  buttonText: string;
  extraClass?: string;
}

const Button = ({ buttonText, extraClass }: ButtonProp) => {
  return (
    <button className={`button ${extraClass}`} type="button">
      {buttonText}
    </button>
  );
};

Button.defaultProps = {
  extraClass: '',
};

export default Button;
