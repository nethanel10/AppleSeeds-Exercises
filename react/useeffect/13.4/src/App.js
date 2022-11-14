import './App.css';
import Spiner from './components/Spiner';
import {useState,useEffect} from 'react'
function App() {
const [timer,settimer]=useState(true)
useEffect(()=>{
  setTimeout(() => {
    settimer(false)
  }, 4000);
})
  return (
    
      <>
      {timer&&<Spiner/>}
      </>

  );
}

export default App;
