import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';
import ICONS from '../icons';
import styles from './style.css';

const URL = 'http://image.tmdb.org/t/p/w300';

const Film = ({
  id,
  title,
  release_date: releaseDate,
  overview,
  poster_path: posterPath,
  vote_average: voteAvaradge,
  addMovie,
  toggleModal,
}) => (
  <div className={styles.film_item}>
    <img src={`${URL}${posterPath}`} alt={title} />
    <div className={styles.info}>
      <p className={styles.releaseDate}>{releaseDate}</p>
      <p className={styles.voteAvaradge}>{voteAvaradge}</p>
      <p className={styles.overview}>{overview}</p>
    </div>
    <div className={styles.wrap_button}>
      <button
        type="button"
        className={styles.btn_add}
        onClick={() => addMovie(id)}
      >
        <Icon icon={ICONS.add} />
      </button>
      <button
        type="button"
        className={styles.btn_info}
        onClick={() => toggleModal(id)}
      >
        <Icon icon={ICONS.info} />
      </button>
    </div>
  </div>
);

Film.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  addMovie: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

Film.defaultProps = {
  poster_path: null,
};

export default Film;
