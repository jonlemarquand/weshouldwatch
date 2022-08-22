import React, { useState } from 'react';

import Layout from '../../components/Layout/Layout';
import HostFilmSeries from './HostFilmSeries';
import HostGenre from './HostGenre';

const HostGame = () => {
  const [hostStage, setHostStage] = useState(1);

  return (
    <Layout useLogo>
      {hostStage === 1 && (
        <HostFilmSeries setHostStage={setHostStage} hostValue={2} />
      )}
      {hostStage === 2 && (
        <HostGenre setHostStage={setHostStage} hostValue={3} />
      )}
    </Layout>
  );
};

export default HostGame;
