import React, { useState } from 'react';

import Layout from '../../components/Layout/Layout';
import HostFilmSeries from './HostFilmSeries';
import HostRoom from './HostRoom';

const HostGame = () => {
  const [hostStage, setHostStage] = useState(1);

  return (
    <Layout useLogo>
      {hostStage === 1 && (
        <HostFilmSeries setHostStage={setHostStage} hostValue={2} />
      )}
      {hostStage === 2 && <HostRoom />}
    </Layout>
  );
};

export default HostGame;
