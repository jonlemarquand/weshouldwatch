import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Programme from '../../components/Programme/Programme';

import programmes from '../../data/programme';

const ShowGame = () => {
  const navigate = useNavigate();

  const [programmeNumber, setProgrammeNumber] = useState(1);
  const [acceptedProgrammes, setAcceptedProgrammes] = useState<string[]>([]);
  const [rejectedProgrammes, setRejectedProgrammes] = useState<string[]>([]);

  const show = programmes[programmeNumber - 1];
  const maxQuestions = 20;

  const updateProgrammeLists = (accepted: boolean) => {
    if (accepted && programmeNumber <= maxQuestions) {
      const newList = acceptedProgrammes;
      newList.push(show.id);
      setAcceptedProgrammes(newList);
    } else if (programmeNumber <= maxQuestions) {
      const newList = rejectedProgrammes;
      newList.push(show.id);
      setRejectedProgrammes(newList);
    }
  };

  const changeProgramme = (accepted: boolean) => {
    updateProgrammeLists(accepted);

    if (programmeNumber < maxQuestions) {
      setProgrammeNumber(programmeNumber + 1);
    } else {
      console.log('Endgame');
      console.log(['Accepted'], acceptedProgrammes);
      console.log(['Rejected'], rejectedProgrammes);
      navigate('/results');
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
