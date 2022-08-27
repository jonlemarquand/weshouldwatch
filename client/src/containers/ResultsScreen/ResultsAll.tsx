import React from 'react';
import Button from '../../components/Button/Button';
import ResultsGrid from '../../components/ResultsGrid/ResultsGrid';

import './Results.scss';

const ResultsAll = () => {
  return (
    <div className="results-all">
      <p className="title-text">All results</p>
      <ResultsGrid />
      <Button buttonText="Start again" useLink linkAddress="/" />
    </div>
  );
};

export default ResultsAll;
