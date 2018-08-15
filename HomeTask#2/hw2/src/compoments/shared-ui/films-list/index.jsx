import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Film from '../film';
import Loader from '../loader';
import styles from './style.css';

const FilmsList = ({ movies, addMovie, toggleModal, fetchMoreMovies }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={fetchMoreMovies}
    hasMore
    loader={
      <div className={styles.loader} key={0}>
        <Loader />
      </div>
    }
  >
    <ul className={styles.film_list}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.film_item}>
          <Film {...movie} addMovie={addMovie} toggleModal={toggleModal} />
        </li>
      ))}
    </ul>
  </InfiniteScroll>
);

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(Array).isRequired,
  addMovie: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  fetchMoreMovies: PropTypes.func.isRequired,
};

export default FilmsList;
