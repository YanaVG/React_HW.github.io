import React from 'react';
import PropTypes from 'prop-types';
import Film from '../film';
// import Loader from '../loader';
import styles from './style.css';

const FilmsList = ({ movies, addMovie, toggleModal }) => (
  <ul className={styles.film_list}>
    {movies.map(movie => (
      <li key={movie.id} className={styles.film_item}>
        <Film {...movie} addMovie={addMovie} toggleModal={toggleModal} />
      </li>
    ))}
  </ul>
);

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(Array).isRequired,
  addMovie: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default FilmsList;
