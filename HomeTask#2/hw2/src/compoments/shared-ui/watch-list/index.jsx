import React from 'react';
import PropTypes from 'prop-types';
import WatchItem from '../watch-item';
import styles from './style.css';

const WatchList = ({ watchList, onDelete, toggleModal }) => (
  <div className={styles.watch_list}>
    <div className={styles.wrap_header}>
      <p className={styles.title}>WatchList</p>
    </div>
    <ul className={styles.wrap_list}>
      {watchList.map(movie => (
        <li key={movie.id}>
          <WatchItem {...movie} onDelete={onDelete} toggleModal={toggleModal} />
        </li>
      ))}
    </ul>
  </div>
);

WatchList.propTypes = {
  watchList: PropTypes.arrayOf(Array).isRequired,
  onDelete: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default WatchList;
