import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, NavLink } from 'react-router-dom';
import { addToWatchlist } from '../../../../redux/actions';
import { getAllMovies, getWatchList } from '../../../../redux/selectors';
import { getItemById } from '../../../../helpers';
import * as routes from '../../../../constants/routes';
import ICONS from '../../../shared-ui/icons';
import styles from './style.css';

class MovieCardPanel extends Component {
  state = {};

  addCardToList = id => {
    const { movies, watchList, addCart } = this.props;
    if (getItemById(watchList, id)) return;
    addCart(getItemById(movies, id));
  };

  render() {
    const { id, location } = this.props;
    return (
      <div className={styles.movie_panel}>
        <button 
          type="button"
          className={styles.btn_add}
          onClick={() => this.addCardToList(id)}
          >
            <Icon icon={ICONS.add}/>
          </button>
          <NavLink
            to={{
              pathname: `${routes.MOVIES}/${id}`,
              search: `${location.search}`,
              state: { from: location }
            }}
          >
          <button
            type="button"
            className={styles.btn_info}
          >
            <Icon icon={ICONS.info} />
          </button> 
          </NavLink>
      </div>
    )
  }
};

MovieCardPanel.PropTypes = {
  id: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(Array).isRequired,
  watchList: PropTypes.arrayOf(Array).isRequired,
  location: PropTypes.objectOf(Object).isRequired,
  addCart: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  watchList: getWatchList(state),
  movies: getAllMovies(state),
});

const mapDispatchToProps = { addCart: addToWatchlist };

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MovieCardPanel);
