import { createSelector } from 'reselect';

export const getAllMovies = state => state.movies.items;

export const getWatchList = state => state.movies.watchList;

export const getCurrentFilter = state => state.filter;

export const getAllMoviesWithCurrentGenre = createSelector(
  [getAllMovies, getCurrentFilter],
  (movies, filter) =>
    filter === 100000
      ? movies
      : movies.filter(item => item.gente_ids.includes(filter)),
);
