import React, { useState } from 'react';
import Button from '../../components/Button/Button';

import './JoinGame.scss';

const JoinReady = () => {
  const [readyStatus, setReadyStatus] = useState(false);

  return (
    <div className="join-ready">
      {readyStatus && <p className="join-ready__text">Waiting for host...</p>}
      {!readyStatus && <p className="join-ready__text">Are you ready?</p>}
      <Button
        buttonAction={setReadyStatus}
        buttonText="Ready"
        buttonValue={!readyStatus}
        useLink={false}
      />
    </div>
  );
};

export default JoinReady;
