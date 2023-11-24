import { useState } from 'react';

import Header from './components/header/Header';
import UserInput from './components/user-input/UserInput';
import Result from './components/result/Result';

const INITIAL_STATE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInputValues, setUserInputValues] = useState(INITIAL_STATE);

  const isInputValid = userInputValues.duration >= 1;

  return (
    <>
      <Header />
      <UserInput values={userInputValues} setValues={setUserInputValues} />
      {isInputValid && <Result values={userInputValues} />}
      {!isInputValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
