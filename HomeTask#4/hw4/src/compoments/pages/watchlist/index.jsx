import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WatchItem from './watch-item';
import { setToLocalStorage } from '../../../redux/actions';
import { getWatchList } from '../../../redux/selectors';
import withRenderLog from '../../../hoc/withRenderLog';
import styles from './style.css';

class WatchList extends Component {
  // state = { isOpen: false };

  componentDidMount() {
    setToLocalStorage();
  }

  render() {
    const { watchlist } = this.props;
    // const { isOpen } = this.state;
    return (
      <div className={styles.watch_list}>
        <div className={styles.wrap_header}>
          <p className={styles.title}>WatchList</p>
        </div>
        <ul className={styles.wrap_list}>
          {watchlist.map(movie => (
            <li key={movie.id}>
              <WatchItem {...movie} />
            </li>
          ))}
        </ul>
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

const mapDispatchToProps = { setState: setToLocalStorage };

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRenderLog,
)(WatchList);
