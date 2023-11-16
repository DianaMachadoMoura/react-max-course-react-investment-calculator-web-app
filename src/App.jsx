import { useState } from 'react';

import { calculateInvestmentResults } from './util/investment';

import Header from './components/header/Header';
import UserInput from './components/user-input/UserInput';
import Result from './components/result/Result';

const INITIAL_STATE = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 10,
  duration: 6,
};

function App() {
  const [userInputValues, setUserInputValues] = useState(INITIAL_STATE);

  const result = calculateInvestmentResults({ ...userInputValues });

  console.log('result', result);

  return (
    <>
      <Header />
      <UserInput values={userInputValues} setValues={setUserInputValues} />
      <Result />
    </>
  );
}

export default App;
