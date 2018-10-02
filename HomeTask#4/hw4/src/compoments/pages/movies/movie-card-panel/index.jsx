import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, NavLink } from 'react-router-dom';
import { addToWatchlist } from '../../../../redux/actions';
import { getAllMovies, getWatchList } from '../../../../redux/selectors';
import { getItemById } from '../../../../helpers';
import * as routes from '../../../../constants/routes';
import AddButton from '../../../shared-ui/buttons/add-button';
import InfoButton from '../../../shared-ui/buttons/info-button';
import SnackBarError from '../../../shared-ui/info-panels/error';
import { auth } from '../../../../firebase';
import styles from '../movie-card/style.css';

class MovieCardPanel extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  addCardToList(id) {
    const { movies, watchlist, addCart, onClose } = this.props;
    if (getItemById(watchlist, id)) {
      return this.handleToggle();
    }
    addCart(getItemById(movies, id));
    return onClose();
  }

  render() {
    const { isOpen } = this.state;
    const { id, location } = this.props;
    return (
      <div className={styles.add_btn_panel}>
        {auth.currentUser() && (
          <AddButton onClick={() => this.addCardToList(id)} />
        )}
        <NavLink
          to={{
            pathname: `${routes.MOVIES}/${id}`,
            search: `${location.search}`,
            state: { from: location },
          }}
        >
          <InfoButton />
        </NavLink>
        <SnackBarError
          text="Movie has already existed in your Watchlist"
          open={isOpen}
          close={this.handleToggle}
        />
      </div>
    );
  }
}

MovieCardPanel.propTypes = {
  id: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(Array).isRequired,
  watchlist: PropTypes.arrayOf(Array).isRequired,
  location: PropTypes.objectOf(Object).isRequired,
  addCart: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  watchlist: getWatchList(state),
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
