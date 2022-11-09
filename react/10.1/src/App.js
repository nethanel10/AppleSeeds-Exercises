import './App.css';
import {useRef} from 'react'
import styled  from 'styled-components';
const Container=styled.div`

display: flex;
flex-direction: column;

`
const Button=styled.button`
width:80px
`
function App() {
  const play=()=>{
    player.current.play()
  }
  const pause=()=>{
    player.current.pause()
  }
const player=useRef()
  return (
    <Container>
<video controls width="40%" src="https://media.w3.org/2011/01/video/blue.mp4" type="video/mp4" ref={player}/>
<Button onClick={play}>playvideo</Button>
<Button onClick={pause}>pausevideo</Button>


    </Container>
  );
}

export default App;
