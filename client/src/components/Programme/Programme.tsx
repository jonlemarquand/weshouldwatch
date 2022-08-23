import React from 'react';
import LogoIcon from '../Logo/LogoIcon';

import './Programme.scss';

interface ProgrammeProps {
  img: string;
  title: string;
  genres: Array<string>;
  type: string;
  bio: string;
  release: number;
  end?: number;
}

const Programme = ({
  img,
  title,
  genres,
  type,
  bio,
  release,
  end,
}: ProgrammeProps) => {
  const styles: { [key: string]: React.CSSProperties } = {
    img: {
      backgroundImage: `linear-gradient(0deg, #393E46 8.85%, rgba(0, 0, 0, 0) 51.04%), linear-gradient(0deg, rgba(0, 0, 0, 0) 82.13%, #393E46 100%), url("/testimages/${img}")`,
    },
  };

  const mapGenres = genres.map((genre: string) => {
    return <div className="programme__info-item">{genre}</div>;
  });

  return (
    <div className="programme" style={styles.img}>
      <div className="programme__header">
        <p>1/20</p>
        <LogoIcon />
      </div>
      <div className="programme__content">
        <h1 className="programme__title">
          {title}{' '}
          <span className="programme__title--small">
            ({release} - {end})
          </span>
        </h1>
        <div className="programme__info">
          <div className="programme__info-item">{type}</div> {mapGenres}
        </div>
        <p className="programme__bio">{bio}</p>
      </div>
    </div>
  );
};

Programme.defaultProps = {
  end: ' ',
};

export default Programme;