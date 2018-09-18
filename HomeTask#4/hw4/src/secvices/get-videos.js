import axios from 'axios';

const API_KEY = 'f8167c43471dee5da36680e2976ba7af';
const BASE_URL = 'https://api.themoviedb.org/3';

const getVideos = ({ id, onSuccess, onError }) => {
  const url = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-EN`;

  return axios
    .get(url)
    .then(response => response.data.results[0])
    .then(onSuccess)
    .catch(onError);
};

export default getVideos;
