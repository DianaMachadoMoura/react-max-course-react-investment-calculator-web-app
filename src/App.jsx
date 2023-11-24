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

  return (
    <>
      <Header />
      <UserInput values={userInputValues} setValues={setUserInputValues} />
      <Result values={userInputValues} />
    </>
  );
}

export default App;
