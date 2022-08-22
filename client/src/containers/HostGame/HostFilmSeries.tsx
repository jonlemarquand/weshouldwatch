import React, { useState } from 'react';

import Button from '../../components/Button/Button';
import SelectButtons from '../../components/SelectButtons/SelectButtons';

interface HostFilmSeriesProps {
  setHostStage: Function;
  hostValue: number;
}

const HostFilmSeries = ({ setHostStage, hostValue }: HostFilmSeriesProps) => {
  const [programmeType, setProgrammeType] = useState('film');

  return (
    <>
      <p className="title-text">Film or series?</p>
      <SelectButtons
        selectArray={[
          { text: 'Film', value: 'film' },
          { text: 'Series', value: 'series' },
        ]}
        selectValue={programmeType}
        selectValueSetter={setProgrammeType}
      />
      <Button
        buttonText="Next"
        useLink={false}
        buttonAction={setHostStage}
        buttonValue={hostValue}
      />
    </>
  );
};

export default HostFilmSeries;
