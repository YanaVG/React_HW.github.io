import React from 'react';
import PropTypes from 'prop-types';
import MovieCardPanel from '../movie-card-panel';
import styles from './style.css';

const URL = 'http://image.tmdb.org/t/p/w300';

const MovieCard = ({
  id,
  title,
  release_date: releaseDate,
  poster_path: posterPath,
  overview,
  vote_average: voteAvarage,
  onClose,
}) => (
  <div className={styles.film_item}>
    <img src={`${URL}${posterPath}`} alt={title} />
    <div className={styles.info}>
      <p className={styles.releaseDate}>{releaseDate}</p>
      <p className={styles.voteAvarage}>{voteAvarage}</p>
      <p className={styles.overview}>{overview}</p>
      <MovieCardPanel id={id} onClose={onClose} />
    </div>
  </div>
);

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  poster_path: null,
};

export default MovieCard;
