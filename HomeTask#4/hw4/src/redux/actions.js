import getMovies from '../secvices/get-movies';
import fetchByTitle from '../secvices/search-by-title';
import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MORE_MOVIES,
  SET_TO_LOCALSTORAGE,
  CHANGE_FILTER,
} from './types';

export const addToWatchlist = movie => ({
  type: ADD_TO_WATCHLIST,
  payload: movie,
});

export const removeFromWatchlist = id => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: id,
});

export const setToLocalStorage = watchList => ({
  type: SET_TO_LOCALSTORAGE,
  payload: watchList,
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMoreMovies = movies => ({
  type: FETCH_MORE_MOVIES,
  payload: movies,
});

const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const getMoviesByCategory = category => dispatch => {
  dispatch(fetchMoviesRequest());

  getMovies(category)
    .then(movies => dispatch(fetchMoviesSuccess(movies)))
    .catch(err => dispatch(fetchMoviesFailure(err)));
};

export const getMoviesByTitle = title => dispatch => {
  dispatch(fetchMoviesRequest());

  fetchByTitle(title)
    .then(movies => dispatch(fetchMoviesSuccess(movies)))
    .catch(err => dispatch(fetchMoviesFailure(err)));
};

export const getMoreMovies = category => dispatch => {
  dispatch(fetchMoviesRequest());

  fetchByTitle(category)
    .then(movies => dispatch(fetchMoreMovies(movies)))
    .catch(err => dispatch(fetchMoviesFailure(err)));
};