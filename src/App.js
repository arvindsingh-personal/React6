import logo from './logo.svg';
import './App.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';



function App() {
  return (
    <div className="App">
      {/* all the three section components are called here  */}
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
