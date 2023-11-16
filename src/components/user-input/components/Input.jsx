const Input = ({ id, label, name, value, setValues }) => {
  const handleInputChange = (event) => {
    setValues((prevValues) => ({ ...prevValues, [name]: +event.target.value }));
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} onChange={handleInputChange} value={value} />
    </div>
  );
};

export default Input;
