import axios from 'axios';

const API_KEY = 'f8167c43471dee5da36680e2976ba7af';
const BASE_URL = 'https://api.themoviedb.org/3';

const getImages = ({ id, onSuccess, onError }) => {
  const url = `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`;

  return axios
    .get(url)
    .then(response => response.data.backdrops)
    .then(onSuccess)
    .catch(onError);
};

export default getImages;
