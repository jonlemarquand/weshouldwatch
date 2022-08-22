import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import SelectButtons from '../../components/SelectButtons/SelectButtons';

const StartGame = () => {
  const [playerStatus, setPlayerStatus] = useState('join');

  const selectButtonsSetter = (value: string) => {
    setPlayerStatus(value);
  };

  return (
    <Layout useLogo>
      <p className="title-text">Join a lobby or start a new one?</p>
      <SelectButtons
        selectArray={[
          { text: 'Join Lobby', value: 'join' },
          { text: 'Start a new game', value: 'host' },
        ]}
        selectValueSetter={selectButtonsSetter}
        selectValue={playerStatus}
      />
      <Link className="button" to={`/${playerStatus}`}>
        Next
      </Link>
    </Layout>
  );
};

export default StartGame;
