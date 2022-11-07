import './App.css';
import data from './data';
import React,{useState} from 'react';
import Component from './components/component';
function App() {
  
return(
  <div>
    
<Component namefunc={printdata().join(" ")}></Component>
  </div>
)
  
}
const printdata=()=>{
 return data.map((p)=>{
return p.name
 })
 }
 const printbefore1990=()=>{
  
  return data.map((a)=>{
if(a.birthday.split("-")[2]<1990){
  return a;
 }
 
}).filter((a)=>a!==undefined)
  

 }

console.log(printdata())
console.log(printbefore1990())

export default App;
