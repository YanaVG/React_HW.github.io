import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WatchList from '../watch-list';
import FilmsList from '../films-list';
import SearchBar from '../search-bar/index';
import MainSection from '../main-section';
import PanelHeader from '../panel-header';
import PanelSection from '../panel-section';
import PanelWatchList from '../panel-watchList';
import CategorySelector from '../category-selector';
import selectorOption from '../../selector-options';
import { getAllMovies } from '../../redux/selectors';
import { getMoviesByCategory, setToLocalStorage } from '../../redux/actions';
import styles from './style.css';

class App extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(Array).isRequired,
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
    const list = JSON.parse(localStorage.getItem('list'));
    if (!list) return;
    setState(list);
  };

  changeCategory = category => {
    this.setState({ category });
  };

  render() {
    const { movies } = this.props;
    const { category } = this.state;
    return (
      <div className={styles.app}>
        {/* {error && <div>error</div>} */}
        <PanelWatchList>
          <WatchList />
        </PanelWatchList>
        <MainSection>
          <PanelHeader>
            <PanelSection>
              <CategorySelector
                options={selectorOption}
                value={category}
                onChange={this.changeCategory}
              />
            </PanelSection>
            <PanelSection>
              <SearchBar />
            </PanelSection>
          </PanelHeader>
          {movies.length > 0 && (
            <FilmsList movies={movies} category={category} />
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
