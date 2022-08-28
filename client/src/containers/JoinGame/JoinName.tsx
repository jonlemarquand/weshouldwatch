import React, { useState, ChangeEvent } from 'react';
import Button from '../../components/Button/Button';

import './JoinGame.scss';

interface JoinRoomNameProps {
  setJoinStage: Function;
  joinStage: number;
}

const JoinRoomName = ({ setJoinStage, joinStage }: JoinRoomNameProps) => {
  const [roomName, setRoomName] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const testAction = () => {
    setShowErrorMessage(false);
    if (!roomName) {
      setShowErrorMessage(true);
    } else {
      setJoinStage(joinStage);
    }
  };

  const updateRoomName = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  return (
    <div className="join-game">
      <div className="join-game__content">
        <p className="title-text">Enter your name</p>
        <div className="join-game__input-container">
          <input
            type="text"
            className="join-game__input"
            value={roomName}
            onChange={updateRoomName}
          />
        </div>
        {showErrorMessage && (
          <div className="join-game__error">Please enter your name</div>
        )}
      </div>
      <Button
        buttonAction={testAction}
        buttonText="Next"
        buttonValue="join"
        useLink={false}
        extraClass="join-game__button"
      />
    </div>
  );
};

export default JoinRoomName;
