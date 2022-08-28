import React, { useState, ChangeEvent } from 'react';
import Button from '../../components/Button/Button';

import './Host.scss';

interface HostRoomNameProps {
  setHostStage: Function;
  hostValue: number;
  setHostName: Function;
  hostName: string | undefined;
}

const hostRoomName = ({
  setHostStage,
  hostValue,
  hostName,
  setHostName,
}: HostRoomNameProps) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const testAction = () => {
    setShowErrorMessage(false);
    if (!hostName) {
      setShowErrorMessage(true);
    } else {
      setHostStage(hostValue);
    }
  };

  const updateRoomName = (e: ChangeEvent<HTMLInputElement>) => {
    setHostName(e.target.value);
  };

  return (
    <div className="host-game">
      <div className="host-game__content">
        <p className="title-text">Enter your name</p>
        <div className="host-game__input-container">
          <input
            type="text"
            className="host-game__input"
            value={hostName}
            onChange={updateRoomName}
          />
        </div>
        {showErrorMessage && (
          <div className="host-game__error">Please enter your name</div>
        )}
      </div>
      <Button
        buttonAction={testAction}
        buttonText="Next"
        buttonValue="host"
        useLink={false}
        extraClass="host-game__button"
      />
    </div>
  );
};

export default hostRoomName;
