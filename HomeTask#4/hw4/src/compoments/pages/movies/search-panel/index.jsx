import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const SearchPanel = ({ children }) => (
  <div className={styles.search_panel}>{children}</div>
);

SearchPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchPanel;
