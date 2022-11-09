import React from 'react';
import Drawbox3 from './box3';
import styled from 'styled-components';
//*style Component 
const Box2=styled.div`
display: flex;
background-color: lightblue;
width: 50vw;
height: 60vh;
justify-content: center;
align-items: center;
`;


function Drawbox2(){
    return(
                //*inline style
        //* <div className="box2" style={{    display: 'flex' , backgroundColor: "lightblue" ,width: "50vw",    height: "60vh",justifyContent:"center",alignitems: "center" }}>
        //*classes    <div className={`box2`}  or className={` box2 ${}`}>

<Box2>
<Drawbox3/>

</Box2>



    )
}
export default Drawbox2;