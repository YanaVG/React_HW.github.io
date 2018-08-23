import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMoviesByCategory, setToLocalStorage } from '../../redux/actions';
import WatchList from './watch-list';
import FilmsList from './films-list';
import SearchBar from './search-bar/index';
import MainSection from './main-section';
import PanelHeader from './panel-header';
import PanelSection from './panel-section';
import PanelWatchList from './panel-watchList';
import CategorySelertor from './category-selector';
import selectorOption from '../selector-options';
import getAllMovies from '../../redux/selectors';
// import fetchByCategory from '../secvices/fetch-by-category';
// import fetchByTitle from '../secvices/fetch-by-title';
import styles from './app.css';

class App extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(Array).isRequired,
    getMovies: PropTypes.func.isRequired,
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
    const { getMovies = getMoviesByCategory } = this.props;
    if (!category) return;

    const prevCategory = prevState.category;
    const nextCategory = category;

    if (prevCategory !== nextCategory) {
      getMovies({
        category: nextCategory.value,
      });
    }
  }

  getFromLocalStorage = () => {
    const { setState } = this.props;
    const list = JSON.parse(localStorage.getItem('list'));
    if (!list) return;
    setState(list);
  };

  // fetchMoreMovies = numberPage => {
  //   const { category } = this.state;
  //   if (!category) return;
  //   fetchByCategory({
  //     numberPage: numberPage + 1,
  //     category: category.value,
  //     onSuccess: this.handleFetchMoreMovies,
  //     onError: this.handleFetchFailure,
  //   });
  // };

  // handleFetchMoreMovies = movies => {
  //   this.setState(prevState => ({
  //     movies: prevState.movies.concat(movies),
  //   }));
  // };

  // handleFetchSuccess = movies => {
  //   this.setState({ movies });
  // };

  // handleFetchFailure = error => {
  //   this.setState({ error: error.massage });
  // };

  // handleFetch = () => {
  //   this.setState({ error: null });
  // };

  changeCategory = category => {
    this.setState({ category });
  };

  // handleSearchMovie = title => {
  //   this.setState({ movies: [] });
  //   fetchByTitle({
  //     title,
  //     onSuccess: this.handleFetchMoreMovies,
  //     onError: this.handleFetchFailure,
  //   });
  // };

  addMovie = id => {
    const { movies, watchList } = this.state;

    const dublicateMovie = watchList.find(movie => movie.id === id);
    if (dublicateMovie) return;

    const selectMovie = movies.find(movie => movie.id === id);

    this.setState(
      prevState => ({
        watchList: [selectMovie, ...prevState.watchList],
      }),
      () => this.setToLocalStorage(),
    );
  };

  deleteMovie = id => {
    this.setState(
      prevState => ({
        watchList: prevState.watchList.filter(movie => movie.id !== id),
      }),
      () => this.setToLocalStorage(),
    );
  };

  toggleModal = id => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      movieId: prevState.isOpen ? null : id,
    }));
  };

  render() {
    // const { movies, category, watchList, error } = this.state;
    const { movies } = this.props;
    const { category } = this.state;
    return (
      <div className={styles.app}>
        {error && <div>error</div>}
        <PanelWatchList>
          <WatchList
            watchList={watchList}
            onDelete={this.deleteMovie}
            toggleModal={this.toggleModal}
          />
        </PanelWatchList>
        <MainSection>
          <PanelHeader>
            <PanelSection>
              <CategorySelertor
                options={selectorOption}
                value={category}
                onChange={this.changeCategory}
              />
            </PanelSection>
            <PanelSection>
              <SearchBar onSearch={this.handleSearchMovie} />
            </PanelSection>
          </PanelHeader>
          {movies.length > 0 && (
            <FilmsList
              movies={movies}
              addMovie={this.addMovie}
              toggleModal={this.toggleModal}
              fetchMoreMovies={this.fetchMoreMovies}
            />
          )}
        </MainSection>
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
