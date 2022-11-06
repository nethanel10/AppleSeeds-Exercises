
const button = document.querySelector('button');
const input = document.querySelector('input');
const container = document.querySelector('.container');
const movieArr = [];

const setMovieCard = (movieObj) => {
  const card = document.createElement('div');
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h4 = document.createElement('h4');
  const h5 = document.createElement('h5');
  card.classList.add('card');
  img.src = movieObj.img;
  h4.textContent = movieObj.title;
  h5.textContent = movieObj.year;
  card.appendChild(img);
  div.appendChild(h4);
  div.appendChild(h5);
  card.appendChild(div);
  container.appendChild(card);
};

const fetchMovieAndTransform = async (movie) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=f3657fc8&t=${movie}
  `);
  const data = await response.json();
  const transformedData = { id: data.imdbID, img: data.Poster, title: data.Title, year: data.Year };
  return transformedData;
};

const getMovie = async () => {
  if (input.value !== '') {
    const movie = await fetchMovieAndTransform(input.value); //! async
    const isNew = setMovieToArr(movie);
    if (isNew) {
      setMovieCard(movie);
    }
  }
};

const setMovieToArr = (newMovie) => {
  const check = movieArr.some((movie) => movie.id === newMovie.id);
  if (!check) {
    movieArr.push(newMovie);
    return true;
  }
  return false;
};

const addEvents = () => {
  button.addEventListener('click', getMovie);
  input.addEventListener('keyup', inputHandler);
};

const inputHandler = (e) => {
  if (e.key === 'Enter') {
    getMovie();
  }
};

const startApp = () => {
  addEvents();
};

startApp();

