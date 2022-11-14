import { useState } from "react";
import "./App.css";
import axios from "axios";
const App = () => {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const getRandomJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(response.data.value);
    setJoke(response.data.value);
  };
  const getCategories = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    console.log(response.data);
    setCategories(response.data);
  };
  const getJokeFromCategories = (category) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      });
  };
  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      <button onClick={getRandomJoke}>Get Joke</button>
      <button onClick={getCategories}>Get categories</button>
      <h1>{joke}</h1>
      <div>
        {categories.map((category) => (
          <div onClick={(e) => getJokeFromCategories(e.target.textContent)}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
