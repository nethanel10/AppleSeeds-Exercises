 import blackandwhite1 from "./photo/blackandwhite1.jpg"
 import colorphoto1 from "./photo/colorphoto1.jpg"
 import blackandwhite2 from "./photo/blackandwhite2.jpg"
 import colorphoto2 from "./photo/colorphoto2.jpg"
 import { useRef} from 'react';
 import styled from "styled-components";
function Blackandwhite1(){
const image1ref=useRef(blackandwhite1);
const image2ref=useRef(blackandwhite2)

const Container=styled.div`
display: flex;
flex-direction: column;


`
const IMG=styled.img`
width:200px
`

    return (
        <Container>
            <IMG
            onMouseEnter={() => (image1ref.current.src=colorphoto1)}
            onMouseLeave={() => (image1ref.current.src=blackandwhite1)}
            ref={image1ref}
            src={blackandwhite1}
            >
 
            </IMG>

            <IMG
            onMouseEnter={() => (image2ref.current.src=colorphoto2)}
            onMouseLeave={() => (image2ref.current.src=blackandwhite2)}
            ref={image2ref}
            src={blackandwhite2}
            >


            
            </IMG>


        </Container>

    )
}

export default Blackandwhite1; 