import React from 'react';
import PropTypes from 'prop-types';
import WatchItem from '../watch-item';
import styles from './style.css';

const WatchList = ({ watchList, onDelete, btnDeleteTitle, btnInfoTitle }) => (
    <div className={styles.watch_list}>
        <div className={styles.wrap_header}>
            <p className={styles.title}>WatchList</p>
        </div>
        <ul className={styles.wrap_list}>
            {watchList.map(movie => (
                <li key={movie.id}>
                    <WatchItem 
                        {...movie}
                        onDelete={onDelete} 
                        btnDeleteTitle={btnDeleteTitle}
                        btnInfoTitle={btnInfoTitle}
                    />
                </li>
            ))}
        </ul>
    </div>
);

WatchList.propTypes = {
    watchList: PropTypes.arrayOf(Array),
    onDelete: PropTypes.func.isRequired,
    btnDeleteTitle: PropTypes.string.isRequired,
    btnInfoTitle: PropTypes.string.isRequired,

};
export default WatchList;