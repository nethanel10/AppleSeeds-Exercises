import {useState,useEffect} from 'react'
import "./Box.css"
function Box(){
  const [color,setcolor]  =useState(0)
  const[frame,setframe]=useState(0)
  const colorsarr=["red","green","blue","yellow","black"]
  useEffect(()=>{
    const timer=setInterval(() => {
        setcolor((prev)=>{
if(prev===4){
    clearInterval(timer)
    setframe("50%")
    return 0;
}
else{
    return prev+1
}
        })
    }, 500);
  },[setcolor])
  return(
    <div
    className='box'
    style={{
        width:"300px",
        height:"300px",
        backgroundColor:`${colorsarr[color]}`,
        borderRadius:`${frame}`
    }}

    >

    </div>
  )
}

export default Box;