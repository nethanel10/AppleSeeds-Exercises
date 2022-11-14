import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import {useEffect, useState}from 'react'
function App() {
  const[isshown,setIsshown]=useState(false)
useEffect(()=>{
  const timer=setTimeout(() => {
    setIsshown(true)
  }, 1000);
},[])
const box1={width:"100px",height:"100px" ,color:"red"}
const box2={width:"200px",height:"200px" ,color:"green"}
const box3={width:"300px",height:"300px" ,color:"yellow"}

  return (
    <>
    {isshown&&<Box {...box1} setIsshown={setIsshown} /> }
    {isshown&&<Box {...box2} setIsshown={setIsshown} /> }
    {isshown&&<Box {...box3} setIsshown={setIsshown} /> }


    </>
  );
}

export default App;
