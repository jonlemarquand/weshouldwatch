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

  const [choiceOptions, setChoiceOptions] = useState("narrow");
  const [medium, setMedium] = useState("tv");
  const [streaming, setStreaming] = useState([]);
  const [userName, setUserName] = useState("");
  const [userState, setUserState] = useState("");

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/host">
              <Host 
                userName={userName}
                userState={userState} 
                medium={medium} 
                choiceOptions={choiceOptions} 
                streaming={streaming}
                setUserName={setUserName}
                setUserState={setUserState} 
                setMedium={setMedium} 
                setChoiceOptions={setChoiceOptions} 
                setStreaming={setStreaming}  
              />
            </Route>
            <Route path="/join">
              <Join 
                userName={userName}
                setUserName={setUserName}
              />
            </Route>
            <Route path="/room/:id">
              <Room 
                userName={userName}
                userState={userState} 
              />
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
