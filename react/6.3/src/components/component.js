import React,{useState} from "react"
function Component(){
    let [count ,Setcount ]=useState(0);
    const incrementCounter=()=>{
        if(count<10){
            Setcount(count+1);

        }
    }
    const decrementCounter=()=>{
        if(count>-10){
            Setcount(count-1);
            


        }
    }

    return(
        <div>
<button onClick={incrementCounter}>+</button>
{ count===0&&<label style={{color:'black'}}>{count}</label>}
{ count<0&&<label style={{color:'red'}}>{count}</label>}
{ count>0&&<label style={{color:'green'}}>{count}</label>}

        <button onClick={decrementCounter}>-</button>

        </div>

    )
}
export default Component