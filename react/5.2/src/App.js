import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
<Card 
titel="my website"
 url="https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
description="welcome to my website"
link="https://www.flickr.com/photos/futurilla/35371308085/"
linkname="learn more"

/>
<Card 
titel="photo web"
 url="https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
description="in the website you can find beutiful photo "
link="https://www.wikipedia.org/"
linkname="learn more"

/>
<Card 
titel="random title "
 url="https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
description="hello world "
link="https://www.flickr.com/photos/futurilla/35371308085/"
linkname="random  "

/>


    </div>
  );
}

export default App;
