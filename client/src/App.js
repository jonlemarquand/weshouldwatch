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
  const [roomPeople, setRoomPeople] = useState([]);
  const [roomID, setRoomID] = useState(null);

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
                roomID={roomID}
                setRoomPeople={setRoomPeople}
                setRoomID={setRoomID} 
              />
            </Route>
            <Route path="/join">
              <Join 
                userName={userName}
                setUserName={setUserName}
                setUserState={setUserState}
                setRoomPeople={setRoomPeople}
                roomID={roomID}
                setRoomID={setRoomID}   
              />
            </Route>
            <Route path="/room/:id">
              <Room 
                userName={userName}
                userState={userState}
                roomPeople={roomPeople}
                setRoomPeople={setRoomPeople}
                roomID={roomID}
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
