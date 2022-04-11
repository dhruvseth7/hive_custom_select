import Select from './components/Select';


function App() {
  return (
    <div>
      <Select label="Country" type="multi" options={["Japan", "Brazil", "Turkey", "United States", "Uganda", "India"]}/>
      <Select label="City" type="single" options={["Tokyo", "Istanbul", "Los Angeles", "Mumbai"]}/>
    </div>
  );
}

export default App;
