import './App.css';
import React,{useState}from 'react';
import Counterbutton from './components/counter';
import Display from './components/display';
function App() {
  let [count,setCount]=useState(0) 
  const incrementCounter =()=>{
    setCount(count+1)
  }
  return(
    <div className='countainer'>
      <Counterbutton Clickfunc={incrementCounter}/>
      <Display message={count}/>
    </div>

  )

}
  

export default App;
