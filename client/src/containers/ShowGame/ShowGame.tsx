import React from 'react';

import Programme from '../../components/Programme/Programme';

import programmes from '../../data/programme';

const ShowGame = () => {
  const show = programmes[0];

  return (
    <Programme
      img={show.image}
      title={show.name}
      bio={show.bio}
      genres={show.genre}
      type={show.type}
      release={show.release}
      end={show.endDate}
    />
  );
};

export default ShowGame;
