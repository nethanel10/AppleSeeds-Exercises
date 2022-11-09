import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [color, setColor] = useState('Red');
  const colors = ['blue', 'red', 'yellow'];

  const insertColors = () => {
    return colors.map((color) => <Button colorProp={color} setColor={setColor} />);
  };
  return (
    <div>
      {insertColors()}
      <h4>{color}</h4>
    </div>
  );
}

export default App;
