import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import ResultsAll from './ResultsAll';
import ResultsWaiting from './ResultsWaiting';
import ResultsWinner from './ResultsWinner';

const ResultsScreen = () => {
  const [resultsStage, setResultsStage] = useState(1);

  return (
    <Layout useLogo>
      {resultsStage === 1 && (
        <ResultsWaiting updateResultsStage={setResultsStage} />
      )}
      {resultsStage === 2 && (
        <ResultsWinner updateResultsStage={setResultsStage} />
      )}
      {resultsStage === 3 && <ResultsAll />}
    </Layout>
  );
};

export default ResultsScreen;
