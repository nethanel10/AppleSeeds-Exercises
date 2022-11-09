import './App.css';
import React,{useRef,useState} from 'react';

  
let a
 function App() {
  const[name,setName]=useState('')
  const inputRef=useRef()
  return (
    <div className="App">
     <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}/>
     <div>my name is {name}</div>
     <button >focous</button>
         </div>
  );
}

export default App;
