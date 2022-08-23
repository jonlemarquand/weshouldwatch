import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HostGame from './containers/HostGame/HostGame';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import JoinGame from './containers/JoinGame/JoinGame';
import StartGame from './containers/StartGame/StartGame';
import ShowGame from './containers/ShowGame/ShowGame';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/host" element={<HostGame />} />
        <Route path="/join" element={<JoinGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/programme" element={<ShowGame />} />
      </Routes>
    </Router>
  );
};

export default App;
