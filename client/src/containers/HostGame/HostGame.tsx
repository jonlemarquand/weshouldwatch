import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from '../../components/Layout/Layout';
import HostFilmSeries from './HostFilmSeries';
import HostName from './HostName';
import HostRoom from './HostRoom';

const HostGame = () => {
  const [hostStage, setHostStage] = useState(1);
  const [hostName, setHostName] = useState();
  const [hostType, setHostType] = useState('film');
  const [roomInfo, setRoomInfo] = useState();

  useEffect(() => {
    if (hostStage === 3) {
      axios
        .post('http://localhost:3000/room', {
          type: hostType,
          name: hostName,
        })
        .then((response) => {
          console.log(response);
          setRoomInfo(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [hostStage]);

  return (
    <Layout useLogo>
      {hostStage === 1 && (
        <HostName
          setHostStage={setHostStage}
          hostValue={2}
          hostName={hostName}
          setHostName={setHostName}
        />
      )}
      {hostStage === 2 && (
        <HostFilmSeries
          setHostStage={setHostStage}
          hostValue={3}
          hostType={hostType}
          setHostType={setHostType}
        />
      )}
      {hostStage === 3 && roomInfo && <HostRoom roomInfo={roomInfo} />}
    </Layout>
  );
};

export default HostGame;
