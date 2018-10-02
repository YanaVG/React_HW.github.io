import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SnackBarInfo from '../../shared-ui/info-panels/warning';
import WatchItem from './watch-item';
import { setFromDatabase } from '../../../redux/actions';
import { getWatchList } from '../../../redux/selectors';
import withAuthorization from '../../../hoc/withAuthorization';
// import withRenderLog from '../../../hoc/withRenderLog';
import { auth, database } from '../../../firebase';
import styles from './style.css';

class WatchList extends Component {
  state = { isOpen: false };

  componentDidMount() {
    setFromDatabase();
  }

  getFromDatabase = () => {
    const { setState } = this.props;
    const userId = auth.currentUser().uid;
    database.getUserData(userId).then(snapshot => {
      if (!snapshot.val()) return;
      setState(snapshot.val().watchlist);
    });
  };

  toggleSnackbar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { watchlist } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={styles.watch_list}>
        {watchlist.length === 0 && (
          <h2 className={styles.emptyWatchlist}>
            You do not have any movies in your watchlist.
          </h2>
        )}
        {watchlist.length > 0 && (
          <AppBar position="static" color="default" className={styles.List}>
            <TransitionGroup component="ul" className={styles.Ul}>
              {watchlist.map(movie => (
                <CSSTransition
                  key={movie.id}
                  timeout={300}
                  classNames={{
                    enter: styles.slideEnter,
                    enterActive: styles.slideEnterActive,
                    exit: styles.slideExit,
                    exitActive: styles.slideExitActive,
                  }}
                >
                  <li className={styles.Card} key={movie.id}>
                    <WatchItem {...movie} show={this.toggleSnackbar} />
                  </li>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </AppBar>
        )}

        <SnackBarInfo
          text="Movie was removed from watchlist"
          open={isOpen}
          close={this.toggleSnackbar}
        />
        {/* <div className={styles.wrap_header}>
          <p className={styles.title}>WatchList</p>
        </div>
        <ul className={styles.wrap_list}>
          {watchlist.map(movie => (
            <li key={movie.id}>
              <WatchItem {...movie} />
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

WatchList.propTypes = {
  watchlist: PropTypes.arrayOf(Array).isRequired,
  setState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  watchlist: getWatchList(state),
});

const mapDispatchToProps = { setState: setFromDatabase };

const authCondition = authUser => !!authUser;

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withAuthorization(authCondition),
)(WatchList);
