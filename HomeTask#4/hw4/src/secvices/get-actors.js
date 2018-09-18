import axios from 'axios';

const API_KEY = 'f8167c43471dee5da36680e2976ba7af';
const BASE_URL = 'https://api.themoviedb.org/3';

const getActors = ({ id, onSuccess, onError }) => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;

  return axios
    .get(url)
    .then(response => response.data.cast)
    .then(onSuccess)
    .catch(onError);
};

export default getActors;
