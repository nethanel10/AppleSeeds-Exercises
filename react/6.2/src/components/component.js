import './Component.css'
import React,{useState} from 'react';

function Component(){
    let [show,setShow]=useState(true)
    return(
        <div >
        <button  onClick={()=>setShow(!show)}>show/hide</button>
        {show && <div className='Box'></div> }
</div>
    )

}
export default Component;