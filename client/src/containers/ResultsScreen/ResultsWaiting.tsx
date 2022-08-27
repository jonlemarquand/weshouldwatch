import React, { useEffect, useState } from 'react';

import './Results.scss';

interface ResultsWaitingProps {
  updateResultsStage: Function;
}

const ResultsWaiting = ({ updateResultsStage }: ResultsWaitingProps) => {
  const [waitingForResults, setWaitingForResults] = useState(true);

  useEffect(() => {
    if (waitingForResults) {
      setTimeout(() => {
        setWaitingForResults(false);
      }, 3000);
    } else {
      setTimeout(() => {
        updateResultsStage(2);
      }, 3000);
    }
  });

  if (waitingForResults) {
    return <div className="results__header">Waiting for others...</div>;
  }
  return <div className="results__header">Calculating results...</div>;
};

export default ResultsWaiting;
