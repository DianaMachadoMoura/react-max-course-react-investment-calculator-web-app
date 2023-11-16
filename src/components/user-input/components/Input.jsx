import { useState } from 'react';

const Input = ({ id, name, initialValue }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input type="number" id={id} onChange={handleInputChange} value={inputValue}/>
    </div>
  );
};

export default Input;
