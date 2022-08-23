import React from 'react';
import Button from '../../components/Button/Button';
import RoomPerson from '../../components/RoomPerson/RoomPerson';

import './Host.scss';

const HostRoom = () => {
  const TempAction = (value: string) => {
    console.log(value);
  };

  return (
    <div className="host-room">
      <div className="host-room__content">
        <p className="host-room__title">Room Code</p>
        <p className="host-room__code">245365</p>
        <p className="host-room__left-text">In the room:</p>
        <div className="host-room__grid">
          <RoomPerson />
          <RoomPerson />
          <RoomPerson />
          <RoomPerson />
        </div>
      </div>
      <Button
        buttonText="Start"
        buttonValue="start"
        buttonAction={TempAction}
        useLink={false}
        extraClass="host-room__button"
      />
    </div>
  );
};

export default HostRoom;
