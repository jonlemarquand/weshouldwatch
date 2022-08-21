import React from 'react';
import { Link } from 'react-router-dom';
import LogoLarge from '../../components/Logo/LogoLarge';

import './HomeScreen.scss';
import '../../components/Button/Button.scss';

const HomeScreen = () => {
  return (
    <div className="homescreen container">
      <LogoLarge />
      <Link to="/start" className="button button--homescreen">
        Start
      </Link>
    </div>
  );
};

export default HomeScreen;
