import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import searchMovieById from '../../secvices/search-by-id';
import getVideos from '../../secvices/get-videos';
import Trailer from './trailer';
import Loader from '../loader';
import Icon from './icon';
import ICONS from '../icons';
import styles from './style.css';

const URL = 'http://image.tmdb.org/t/p/w300';

export default class ModalWindow extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    toggleModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

  state = {
    movie: null,
    videos: '',
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    const { id } = this.props;
    this.getMovieInfo({ id });
  }

  getMovieInfo = ({ id }) => {
    searchMovieById({
      id,
      onSuccess: this.handleFetchSuccess,
      onError: this.handleFetchFailure,
    });
    getVideos({
      id,
      onSuccess: this.handleFetchVideo,
      onError: this.handleFetchFailure,
    });
  };

  handleFetchVideo = videos => {
    this.setState({ videos });
  };

  handleFetchSuccess = movie => {
    this.setState({ movie, isLoading: false });
  };

  handleFetchFailure = error => {
    this.setState({ error, isLoading: false });
  };

  render() {
    const { isOpen, toggleModal, id } = this.props;
    const { error, isLoading, movie, videos } = this.state;
    // console.log(video);
    return (
      <Modal
        isOpen={isOpen}
        onClose={toggleModal}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        center
        className={styles.modal}
        ariaHideApp={false}
        shouldFocusAfterRender={false}
      >
        {error && <div>{error}</div>}
        {isLoading && <Loader />}

        {!isLoading && (
          <div className={styles.content}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => toggleModal(id)}
            >
              <Icon icon={ICONS.close} />
            </button>
            <img
              className={styles.poster}
              src={`${URL}${movie.backdrop_path}`}
              alt="poster"
            />
            <div>
              <h2 className={styles.original_title}>{movie.original_title}</h2>
              <h4 className={styles.tagline}>{`"${movie.tagline}"`}</h4>
              <p className={styles.overview}>{movie.overview}</p>
              <h4 className={styles.headers}>Genres:</h4>
              <ul className={styles.list}>
                {movie.genres.map(genre => (
                  <li className={styles.genre} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
              <h4 className={styles.headers}>Companies:</h4>
              <ul className={styles.list}>
                {movie.production_companies.map(company => (
                  <li className={styles.company} key={company.id}>
                    {company.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.trailer}>
              <Trailer url={videos.key} />
            </div>
          </div>
        )}
      </Modal>
    );
  }
}
