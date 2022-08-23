import React, { useState } from 'react';

import JoinRoomCode from './JoinRoomCode';

import './JoinGame.scss';
import Layout from '../../components/Layout/Layout';
import JoinReady from './JoinReady';

const JoinGame = () => {
  const [joinGameStage, setJoinGameStage] = useState(1);
  return (
    <Layout useLogo>
      {joinGameStage === 1 && (
        <JoinRoomCode setJoinStage={setJoinGameStage} joinStage={2} />
      )}
      {joinGameStage === 2 && <JoinReady />}
    </Layout>
  );
};

export default JoinGame;
