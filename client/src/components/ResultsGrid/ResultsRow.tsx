import React from 'react';

import './ResultsGrid.scss';

const ResultsRow = () => {
  const randNumber = Math.round(Math.random() * 10);
  console.log(randNumber);

  const styles: { [key: string]: React.CSSProperties } = {
    width: {
      maxWidth: `${(randNumber / 9) * 100}%`,
    },
  };

  return (
    <div className="results-row">
      <p className="results-row__title">House of the Drag</p>
      <div className="results-row__graph">
        <div className="results-row__graph-filled" style={styles.width}>
          {' '}
        </div>
      </div>
      <p className="results-row__score">{randNumber}/9</p>
    </div>
  );
};

export default ResultsRow;
