import axios from 'axios';

const API_KEY = 'f8167c43471dee5da36680e2976ba7af';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const searchMovieById = ({ id, onSuccess, onError }) => {
  const url = `${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`;

  return axios
    .get(url)
    .then(response => response.data)
    .then(onSuccess)
    .catch(onError);
};

export default searchMovieById;
