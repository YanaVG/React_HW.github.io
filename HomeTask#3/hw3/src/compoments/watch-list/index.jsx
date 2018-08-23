import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WatchItem from '../watch-item';
import styles from './style.css';
import { getWatchList } from '../../redux/selectors';
import withRenderLog from '../../hoc/withRenderLog';

const WatchList = ({ watchList }) => (
  <div className={styles.watch_list}>
    <div className={styles.wrap_header}>
      <p className={styles.title}>WatchList</p>
    </div>
    <ul className={styles.wrap_list}>
      {watchList.map(movie => (
        <li key={movie.id}>
          <WatchItem {...movie} />
        </li>
      ))}
    </ul>
  </div>
);

WatchList.propTypes = {
  watchList: PropTypes.arrayOf(Array).isRequired,
  // onDelete: PropTypes.func.isRequired,
  // toggleModal: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  watchList: getWatchList(state),
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
  withRenderLog,
)(WatchList);
