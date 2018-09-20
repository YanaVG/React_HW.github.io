import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAllMovies } from '../../../redux/selectors';
import { getMoviesByCategory } from '../../../redux/actions';
import { getCategoryFromProps } from '../../../helpers';
// import { getAllMoviesWithCurrentGenre } from '../../../redux/selectors';
import * as routes from '../../../constants/routes';
import MoviesList from './movies-list';
import SearchBar from './search-bar';
import SearchPanel from './search-panel';
import CategorySelector from './category-selector';
import MainSection from './main-section';

class MoviesPage extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(Array).isRequired,
    getMovies: PropTypes.func.isRequired,
    history: PropTypes.objectOf(Object).isRequired,
  };

  state = {
    currentCategory: null,
  };

  componentDidMount() {
    const category = getCategoryFromProps(this.props);
    const { getMovies: fetchMovies } = this.props;
    if (!category) return;
    fetchMovies({ category });
  }

  componentDidUpdate(prevProps) {
    const { getMovies: fetchMovies } = this.props;
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);
    if (!nextCategory) return;
    if (prevCategory === nextCategory) return;
    fetchMovies({ category: nextCategory });
  }

  onChangeCategory = category => {
    this.setState({ currentCategory: category });
    const { history } = this.props;
    history.push({
      pathname: routes.HOME,
      // pathname: this.props.location.pathname,
      search: `?category=${category.value}`,
    });
  };

  render() {
    const { currentCategory } = this.state;
    const { movies } = this.props;
    const category = getCategoryFromProps(this.props);

    return (
      <MainSection>
        <SearchPanel>
          <CategorySelector
            value={currentCategory}
            onChange={this.onChangeCategory}
          />
          {/* <MoviesFilter /> */}
          <SearchBar />
        </SearchPanel>
        {movies.length > 0 && (
          <MoviesList movies={movies} category={category} />
        )}
      </MainSection>
    );
  }
}

const mapStateToProps = state => ({
  movies: getAllMovies(state),
  // movies: getAllMoviesWithCurrentGenre(state),
});

const mapDispatchToProps = { getMovies: getMoviesByCategory };

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MoviesPage);
