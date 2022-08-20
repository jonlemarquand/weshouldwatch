import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './containers/HomeScreen';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Route path="/" element={<HomeScreen />} />
    </Router>
  );
};

export default App;
