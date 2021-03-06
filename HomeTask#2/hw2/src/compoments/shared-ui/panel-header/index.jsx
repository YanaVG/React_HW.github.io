import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const PanelHeader = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

PanelHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PanelHeader;
