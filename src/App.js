import Select from './components/Select';


function App() {
  return (
    <div>
      <Select
        label="Country"
        type="multi"
        options={["Japan", "Brazil", "Turkey", "United States", "Uganda", "India", "Germany", "South Korea", "New Zealand"]}
      />
      <Select
        label="Age"
        type="single"
        options={["13-18", "18-21", "21-30", "30-40", "40-65", "65+"]}
        placeholder="Please input your age"
      />
    </div>
  );
}

export default App;
