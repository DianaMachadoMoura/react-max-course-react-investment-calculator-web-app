import Input from './components/Input';

const UserInput = () => {
  return (
    <div id="user-input" className="input-group">
      <Input
        id="initial-investment"
        name="Initial Investment"
        initialValue={1000}
      />
      <Input
        id="annual-investment"
        name="Annual Investment"
        initialValue={1200}
      />
      <Input id="expected-return" name="Expected return" initialValue={6} />
      <Input id="duration" name="Duration" initialValue={10} />
    </div>
  );
};

export default UserInput;
