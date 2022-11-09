import React from 'react';
import Drawbox2 from './box2';
import styled from 'styled-components'
//*style component 
const Box1=styled.div`
display: flex;
background-color:  green;
width: 60vw;
height: 80vh;
justify-content: center;
align-items: center;
`;


function Drawbox1(){
    return(
        //*inline style
        // *<div className="box1" style={{display:"flex",backgroundcolor:"green", width: '60vw',height: '80vh',justifycontent: 'center',alignitems: 'center'}}>
        //*without import from box.css file
        //*class < className={"box1"} or className={`box1 ${}`} >
        //* styled component

<Box1>
<Drawbox2/>
</Box1>
      

    )

    
}
export default Drawbox1;