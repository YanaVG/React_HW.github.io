import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from 'react-loaders';
import MovieCard from '../movie-card';
import styles from './style.css';
import { getMoreMovies } from '../../../../redux/actions';

class MoviesList extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    movies: PropTypes.arrayOf(Array).isRequired,
    category: PropTypes.string,
    fetchMoreMovies: PropTypes.func.isRequired,
  };

  static defaultProps = {
    category: null,
  };

  getMoreMovies = pageNum => {
    const { category, fetchMoreMovies } = this.props;
    fetchMoreMovies({ category: category.value, pageNum: pageNum + 1 });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { movies, category } = this.props;
    console.log(movies);
    console.log(category);
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={getMoreMovies}
        hasMore
        loader={
          <div className={styles.loader} key={0}>
            <Loader
              type="ball-clip-rotate-multiple"
              backgroundColor="#fff"
              height={150}
              width={150}
            />
          </div>
        }
      >
        <ul className={styles.film_list}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.film_item}>
              <MovieCard {...movie} onClose={this.handleToggle} />
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    );
  }
}

const mapDispatchToProps = { fetchMoreMovies: getMoreMovies };

export default connect(
  null,
  mapDispatchToProps,
)(MoviesList);
