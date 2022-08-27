import React, { useState } from 'react';

import Programme from '../../components/Programme/Programme';

import programmes from '../../data/programme';

const ShowGame = () => {
  const [programmeNumber, setProgrammeNumber] = useState(1);

  const show = programmes[programmeNumber - 1];

  const changeProgramme = (accepted: boolean) => {
    if (programmeNumber < 20) {
      if (accepted) {
        setProgrammeNumber(programmeNumber + 1);
      }
      setProgrammeNumber(programmeNumber + 1);
    } else {
      console.log('Endgame');
    }
  };

  return (
    <Programme
      img={show.image}
      title={show.name}
      bio={show.bio}
      genres={show.genre}
      type={show.type}
      release={show.release}
      end={show.endDate}
      changeProgramme={changeProgramme}
      programmeNumber={programmeNumber}
    />
  );
};

export default ShowGame;
