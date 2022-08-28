import React from 'react';

import Button from '../../components/Button/Button';
import SelectButtons from '../../components/SelectButtons/SelectButtons';

interface HostFilmSeriesProps {
  setHostStage: Function;
  hostValue: number;
  setHostType: Function;
  hostType: string | undefined;
}

const HostFilmSeries = ({
  setHostStage,
  hostValue,
  setHostType,
  hostType,
}: HostFilmSeriesProps) => {
  return (
    <>
      <p className="title-text">Film or series?</p>
      <SelectButtons
        selectArray={[
          {
            text: 'Film',
            value: 'film',
            get active() {
              return hostType === this.value;
            },
          },
          {
            text: 'Series',
            value: 'series',
            get active() {
              return hostType === this.value;
            },
          },
        ]}
        selectValueSetter={setHostType}
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
