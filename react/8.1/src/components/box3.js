import Drawbox4 from './box4';
import styled from 'styled-components'
//*style Component 
const Box3=styled.div`
display: flex;
flex-direction: column;
background-color: pink;
width: 40vw;
height: 40vh;
justify-content: center;
align-items: center;
`;

function Drawbox3(){
    return(
//*inline style <div className="box3" style={{display: "flex",flexdirection:'column',backgroundcolor: 'pink',width: '40vw',height: '40vh',justifycontent: "center",alignitems: 'center'}}> 
//*without import from  box.css
//*class  < className={'box3'} or className={` box3 ${}`}

<Box3>
<Drawbox4/>
<Drawbox4/>

</Box3>


      


    )
}
export default Drawbox3;