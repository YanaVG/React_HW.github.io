import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import searchById from '../../../secvices/search-by-id';
import getActors from '../../../secvices/get-actors';
import getImages from '../../../secvices/get-images';
import getVideos from '../../../secvices/get-videos';
import Trailer from './trailer';
import ActorsSlider from './carousel-slider/actors-slider';
import ImagesSlider from './carousel-slider/img-slider';
import styles from './style.css';

const IMG_BASE = `https://image.tmdb.org/t/p/w500/`;

class MovieInfo extends Component {
  static propTypes = {
      match: PropTypes.objectOf(Object).isRequired,
  };

  state = {
      movie: null,
      images: null,
      actors: null,
      videos: null,
      loading: true,
      error: null,
  };

  componentDidMount() {
      const id = this.getIdFromProps();
      this.getMovieInfo({ id });
  };

  getIdFromProps = () => {
      const { match } = this.props;
      return match.params.movieId;
  };

  getMovieInfo = ({ id }) => {
    searchById({
      id,
      onSuccess: this.handleFetchSuccess,
      onError: this.handleFetchFailure,
    });
    getVideos({
      id,
      onSuccess: this.fetchVideos,
      onError: this.handleFetchFailure,
    });
    getImages({
      id,
      onSuccess: this.fetchImages,
      onError: this.handleFetchFailure,
    });
    getActors({
        id,
        onSuccess: this.fetchActors,
        onError: this.handleFetchFailure,
      });
  };

  fetchVideos = videos => {
      this.setState({ videos });
  };

  fetchImages = images => {
    this.setState({ images });
  };

  fetchActors = actors => {
    this.setState({ actors });
  };

  handleFetchSuccess = movie => {
    this.setState({ movie, loading: false });
  };

  handleFetchFailure = error => {
    this.setState({ loading: false, error });
  };

  render(){
      const { movie, images, actors, videos, loading, error } = this.state;
      return(
          <div className={styles.container}>
            {error && <div>{error}</div>}
            {loading && (
              <Loader
                type="Circles"
                color="#00BFFF"
                heigh={140}
                width={140}/>
            )}
            {!loading && (
                <div className={styles.content}>
                  <div className={styles.wrap_img}>
                    <img
                      className={styles.poster_img}
                      src={`${IMG_BASE}${movie.poster_path}`}
                      alt="poster"
                    />
                    <img
                      className={styles.poster_img_min}
                      src={`${IMG_BASE}${movie.backdrop_path}`}
                      alt="poster"
                    />
                  </div>
                  <div className={styles.content_right}>
                    <h2 className={styles.head_title}>{movie.original_title}</h2>
                    <h4 className={styles.tagline}>{`"${movie.tagline}"`}</h4>
                    <p className={styles.overview}>{movie.overview}</p>
                    <h4 className={styles.headers}>Genres</h4>
                    <ul className={styles.list}>
                      {movie.genres.map(genre => (
                        <li className={styles.genre} key={genre.id}>
                          {genre.name}
                       </li>
                      ))}
                    </ul>
                    <h4 className={styles.headers}>Companies</h4>
                    <ul className={styles.list}>
                      {movie.production_companies.map(companie => (
                        <li className={styles.companie} key={companie.id}>
                          {companie.name}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.trailer_block}>
                      <h4 className={styles.headers}>Trailer</h4>
                      {videos && <Trailer url={videos.key} />}
                    </div>
                  </div>
                  <div className={styles.trailer_block_min}>
                    <h4 className={styles.headers}>Trailer</h4>
                    {videos && <Trailer url={videos.key} />}
                  </div>
                    <div className={styles.bottom_content}>
                      {images && (
                        <div>
                            <h4 className={styles.headers}>Movie screenshots</h4>
                            <div className={styles.slider_container}>
                              <ImagesSlider images={images} />
                            </div>
                        </div>
                      )}
                      {actors && (
                        <div>
                          <h4 className={styles.headers}>Actors</h4>
                          <div className={styles.slider_container}>
                            <ActorsSlider actors={actors} />
                          </div>
                        </div>
                          )}
                      </div>
                </div>
            )}
          </div>
        );
    }
}


export default MovieInfo;