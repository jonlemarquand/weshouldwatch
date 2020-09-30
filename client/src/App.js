import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './containers/Home';
import Host from './containers/Host';
import Join from './containers/Join';
import Room from './containers/Room';

import './App.scss';

function App() {

  const [hostName, setHostName] = useState("");
  const [medium, setMedium] = useState("tv");
  const [choiceOptions, setChoiceOptions] = useState("narrow");
  const [streaming, setStreaming] = useState([])

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/host">
              <Host 
                hostName={hostName} 
                medium={medium} 
                choiceOptions={choiceOptions} 
                streaming={streaming}
                setHostName={setHostName} 
                setMedium={setMedium} 
                setChoiceOptions={setChoiceOptions} 
                setStreaming={setStreaming}  
              />
            </Route>
            <Route path="/join">
              <Join 
                hostName={hostName}
                setHostName={setHostName}
              />
            </Route>
            <Route path="/room/:id">
              <Room hostName={hostName}/>
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
