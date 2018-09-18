import axios from 'axios';

const API_KEY = 'f8167c43471dee5da36680e2976ba7af';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

const fetchByTitle = ({ title, onSuccess, onError, numberPage }) => {
  const url = `${BASE_URL}?api_key=${API_KEY}&language=en-US&query=${title}&page=${numberPage}&include_adult=false`;

  return axios
    .get(url)
    .then(response => response.data.results)
    .then(onSuccess)
    .catch(onError);
};

export default fetchByTitle;
