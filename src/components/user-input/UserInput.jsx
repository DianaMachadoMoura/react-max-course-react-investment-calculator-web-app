import Input from './components/Input';

const INPUT_FIELDS_DATA = [
  {
    name: 'initialInvestment',
    id: 'initial-investment',
    label: 'Initial Investment',
  },
  {
    name: 'annualInvestment',
    id: 'annual-investment',
    label: 'Annual Investment',
  },
  {
    name: 'expectedReturn',
    id: 'expected-return',
    label: 'Expected return',
  },
  {
    name: 'duration',
    id: 'duration',
    label: 'duration',
  },
];

const UserInput = ({ values, setValues }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        {INPUT_FIELDS_DATA.map((input) => (
          <Input
            key={input.id}
            id={input.id}
            label={input.label}
            name={input.name}
            value={values[input.name]}
            setValues={setValues}
          />
        ))}
      </div>
    </section>
  );
};

export default UserInput;
