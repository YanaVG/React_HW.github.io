import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Icon = props => {
  const { icon } = props;
  return (
    <svg className={styles.icon} viewBox="0 0 357 357">
      <path d={icon} />
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
