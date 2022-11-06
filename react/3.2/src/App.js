import './App.css';

function App() {
  const data = ["hello", "world"].join(" ");
  const number1 = 5;
const number2 =6;
const string = "I love React!"
  return (
  <div>
    <h2> {data} notice the spacing! </h2>
    <h3>5 + 6 = {number1+number2}</h3>
<h3>The string’s length is {string.length}</h3>
  </div>
  
  );
}

export default App;
