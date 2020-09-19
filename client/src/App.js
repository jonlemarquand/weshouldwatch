import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './containers/Home';
import Host from './containers/Host';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/host">
              <Host />
            </Route>
            <Route path="/join">
              <p>Join</p>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
