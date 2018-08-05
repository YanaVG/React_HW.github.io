import React from 'react';
import PropTypes from 'prop-types';
import styles from './search-bar.css';

const SearchBar = ({ value, onChange}) => (
    <div className={styles.wrap}>
        <h2>Filter books by title</h2>
        <input type="text" value={value} onChange={onChange} />
    </div>
);

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};
export default SearchBar;