import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import Icon from './icon';
// import ICONS from '../../../shared-ui/icons';
import SearchButton from '../../../shared-ui/buttons/search-button';
import withRenderProp from '../../../../hoc/withRenderLog';
import { getMoviesByTitle } from '../../../../redux/actions';
import styles from './style.css';

class SearchBar extends Component {
  static propTypes = {
    getMoviesByTitle: PropTypes.func.isRequired,
  };

  state = {
    title: '',
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    const { getMoviesByTitle: fetchMovies } = this.props;
    const { title } = this.state;
    e.preventDefault();

    fetchMovies({ title });

    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;

    return (
      <form className={styles.wrap} onSubmit={this.handleSubmit}>
        <h5>Search by title</h5>
        <div className={styles.panel}>
          <input
            type="text"
            placeholder="Enter movie title..."
            value={title}
            onChange={this.handleChange}
            required
          />
          <SearchButton />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = { getMoviesByTitle };

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withRenderProp,
)(SearchBar);
