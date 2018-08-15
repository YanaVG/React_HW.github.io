import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const PanelWatchList = ({ children }) => (
  <div className={styles.panel_watchList}>{children}</div>
);

PanelWatchList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PanelWatchList;
