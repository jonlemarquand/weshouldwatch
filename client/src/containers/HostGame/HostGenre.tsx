import React from 'react';

import Button from '../../components/Button/Button';

interface HostGenreProps {
  setHostStage: Function;
  hostValue: number;
}
const HostGenre = ({ setHostStage, hostValue }: HostGenreProps) => {
  return (
    <div>
      Genre
      <Button
        buttonText="Next"
        useLink={false}
        buttonAction={setHostStage}
        buttonValue={hostValue}
      />
    </div>
  );
};

export default HostGenre;
