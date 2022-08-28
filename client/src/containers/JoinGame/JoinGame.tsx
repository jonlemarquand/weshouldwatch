import React, { useState } from 'react';

import JoinRoomCode from './JoinRoomCode';

import './JoinGame.scss';
import Layout from '../../components/Layout/Layout';
import JoinReady from './JoinReady';
import JoinRoomName from './JoinName';

const JoinGame = () => {
  const [joinGameStage, setJoinGameStage] = useState(1);
  return (
    <Layout useLogo>
      {joinGameStage === 1 && (
        <JoinRoomName setJoinStage={setJoinGameStage} joinStage={2} />
      )}
      {joinGameStage === 2 && (
        <JoinRoomCode setJoinStage={setJoinGameStage} joinStage={3} />
      )}
      {joinGameStage === 3 && <JoinReady />}
    </Layout>
  );
};

export default JoinGame;
