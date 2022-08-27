import React from 'react';
import Button from '../../components/Button/Button';

interface ResultsWinnerProps {
  updateResultsStage: Function;
}

const ResultsWinner = ({ updateResultsStage }: ResultsWinnerProps) => {
  return (
    <div className="results-winner">
      <p className="title-text">And the winner is...</p>
      <h1 className="results-winner__header">The Bill</h1>
      <p>7 - 2 in favour</p>
      <Button
        buttonText="View all results"
        buttonAction={updateResultsStage}
        buttonValue={3}
        useLink={false}
      />
    </div>
  );
};

export default ResultsWinner;
