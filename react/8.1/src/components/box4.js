import styled from 'styled-components'
//*style Component 
const Box4=styled.div`
background-color: purple;
width: 20vw;
height: 10vh;
margin:  1rem;
`;

function Drawbox4(){
    return(
        //*inline style   <div className="box4" style={{ backgroundcolor:"purple",width: "20vw",height:"10vh",margin:"1rem"}}>  
//* class <div className={"box4"} or className={` box4 ${}`}
<Box4>

</Box4>

    )
}
export default Drawbox4;