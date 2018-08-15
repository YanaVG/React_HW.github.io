import axios from 'axios';

const API_KEY = 'f8167c43471dee5da36680e2976ba7af';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// ${BASE_URL}?api_key=${API_KEY}&language=en-EN&query=${title}&page=${pageNum}

const fetchByTitle = ({ title, onSuccess, onError }) => {
  const url = `${BASE_URL}?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`;

  return axios
    .get(url)
    .then(response => response.data.results)
    .then(onSuccess)
    .catch(onError);
};

export default fetchByTitle;
