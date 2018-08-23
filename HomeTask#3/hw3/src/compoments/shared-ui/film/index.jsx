import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from './icon';
import ICONS from '../icons';
import getItemById from '../../../helpers';
import { addToWatchlist } from '../../../redux/actions';
import { getAllMovies, getWatchList } from '../../../redux/selectors';
import styles from './style.css';

const URL = 'http://image.tmdb.org/t/p/w300';

class Film extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(Array).isRequired,
    watchList: PropTypes.arrayOf(Array).isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    addMovie: PropTypes.func.isRequired,
  };

  static defaultProps = {
    poster_path: null,
  };

  addCardToList = id => {
    const { movies, watchList, addMovie } = this.props;
    if (getItemById(watchList, id)) return;
    addMovie(getItemById(movies, id));
  };

  render() {
    const {
      id,
      title,
      release_date: releaseDate,
      poster_path: posterPath,
      overview,
      vote_average: voteAvarage,
    } = this.props;
    return (
      <div className={styles.film_item}>
        <img src={`${URL}${posterPath}`} alt={title} />
        <div className={styles.info}>
          <p className={styles.releaseDate}>{releaseDate}</p>
          <p className={styles.voteAvarage}>{voteAvarage}</p>
          <p className={styles.overview}>{overview}</p>
        </div>
        <div className={styles.wrap_button}>
          <button
            type="button"
            className={styles.btn_add}
            onClick={() => this.addCardToList(id)}
          >
            <Icon icon={ICONS.add} />
          </button>
          <button
            type="button"
            className={styles.btn_info}
            // onClick={() => toggleModal(id)}
          >
            <Icon icon={ICONS.info} />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  watchList: getWatchList(state),
  movies: getAllMovies(state),
});

const mapDispatchToProps = { addMovie: addToWatchlist };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Film);
