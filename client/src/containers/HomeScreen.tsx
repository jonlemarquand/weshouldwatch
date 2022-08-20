import React from 'react';

import Button from '../components/Button/Button';
import LogoLarge from '../components/Logo/LogoLarge';

import './HomeScreen.scss';

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <LogoLarge />
      <Button buttonText="Start" extraClass="button--homescreen" />
    </div>
  );
};

export default HomeScreen;
