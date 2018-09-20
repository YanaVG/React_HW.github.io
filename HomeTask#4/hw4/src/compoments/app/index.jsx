import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import WatchList from '../pages/watchlist/index';
// import FilmsList from '../pages/movies/films-list';
// import SearchBar from '../search-bar/index';
// import MainSection from '../main-section';
// import PanelHeader from '../panel-header';
// import PanelSection from '../panel-section';
// import PanelWatchList from '../panel-watchList';
// import CategorySelector from '../category-selector';
// import selectorOption from '../../compoments/pages/movies/selectors/selector-options';
// import WatchList from '../pages/watchlist/index';
import MovieCardPanel from '../pages/movies/index';
import { getAllMovies } from '../../redux/selectors';
import { getMoviesByCategory, setToLocalStorage } from '../../redux/actions';
import styles from './style.css';

class App extends Component {
  static propTypes = {
    // movies: PropTypes.arrayOf(Array).isRequired,
    getMoviesByCategory: PropTypes.func.isRequired,
    setState: PropTypes.func.isRequired,
  };

  state = {
    category: null,
  };

  componentDidMount() {
    this.getFromLocalStorage();
  }

  componentDidUpdate(pevProps, prevState) {
    const { category } = this.state;
    const { getMoviesByCategory: fetchMovies } = this.props;
    if (!category) return;

    const prevCategory = prevState.category;
    const nextCategory = category;

    if (prevCategory !== nextCategory) {
      fetchMovies({
        category: nextCategory.value,
      });
    }
  }

  getFromLocalStorage = () => {
    const { setState } = this.props;
    const list = JSON.parse(localStorage.getItem('watchList'));
    if (!list) return;
    setState(list);
  };

  changeCategory = category => {
    this.setState({ category });
  };

  render() {
    return (
      <div className={styles.app}>
        {/* <WatchList /> */}
        <MovieCardPanel />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: getAllMovies(state),
});
const mapDispatchToProps = { getMoviesByCategory, setState: setToLocalStorage };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
