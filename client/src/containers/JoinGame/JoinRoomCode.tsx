import React, { useState, ChangeEvent } from 'react';
import Button from '../../components/Button/Button';

import './JoinGame.scss';

interface JoinRoomCodeProps {
  setJoinStage: Function;
  joinStage: number;
}

const JoinRoomCode = ({ setJoinStage, joinStage }: JoinRoomCodeProps) => {
  const [roomCode, setRoomCode] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const testAction = () => {
    setShowErrorMessage(false);
    if (roomCode.toUpperCase() !== 'JOIN') {
      setShowErrorMessage(true);
    } else {
      setJoinStage(joinStage);
    }
  };

  const updateRoomCode = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomCode(e.target.value);
  };

  return (
    <div className="join-game">
      <div className="join-game__content">
        <p className="title-text">Enter a room code</p>
        <div className="join-game__input-container">
          <input
            type="text"
            className="join-game__input"
            value={roomCode}
            onChange={updateRoomCode}
          />
        </div>
        {showErrorMessage && (
          <div className="join-game__error">
            Error (XD231): Cannot join room.
          </div>
        )}
      </div>
      <Button
        buttonAction={testAction}
        buttonText="Join game"
        buttonValue="join"
        useLink={false}
        extraClass="join-game__button"
      />
    </div>
  );
};

export default JoinRoomCode;
