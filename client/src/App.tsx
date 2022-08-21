import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HostGame from './containers/HostGame/HostGame';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import StartGame from './containers/StartGame/StartGame';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/host" element={<HostGame />} />
        <Route path="/start" element={<StartGame />} />
      </Routes>
    </Router>
  );
};

export default App;
