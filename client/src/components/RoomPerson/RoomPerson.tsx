import React from 'react';

import './RoomPerson.scss';

const RoomPerson = () => {
  return (
    <div className="room-person">
      <div className="room-person__circle room-person__circle--unconfirmed">
        {' '}
      </div>
      <div className="room-person__name">Adam</div>
    </div>
  );
};

export default RoomPerson;
