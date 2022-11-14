import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react'
import FilterAvatars from './components/FilterAvatars';
function App() {
  const [avatarsArr, setAvatarsArr] = useState(null);
const [inputValue, setInputValue] = useState('');
const destructData = (data) => {
  return data.map((avatar) => {
    return { name: `${avatar.name.first} ${avatar.name.last}`, img: avatar.picture.large };
  });
};
useEffect(() => {
  axios
    .get('https://randomuser.me/api/?results=10')
    .then(({ data }) => {
      setAvatarsArr(destructData(data.results));
    })
    .catch((e) => {
      console.log(e);
    });
}, []);
const handleInput = (e) => {
  setInputValue(e.target.value);
};


  return (
    <div>
    <input value={inputValue} onChange={handleInput} />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
        gap: `1rem`,
        marginBottom: '1rem',
      }}
    >
      {avatarsArr && <FilterAvatars avatarsArr={avatarsArr} inputValue={inputValue} />}
    </div>
  </div>

  );
}

export default App;
