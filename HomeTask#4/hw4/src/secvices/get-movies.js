import axios from 'axios';

const API_KEY = 'f8167c43471dee5da36680e2976ba7af';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = ({ category, numberPage }) => {
  const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=${numberPage}`;

  return axios.get(url).then(response => response.data.results);
};

export default fetchMovies;
