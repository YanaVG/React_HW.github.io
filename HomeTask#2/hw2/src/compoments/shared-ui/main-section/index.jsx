import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const MainSection = ({ children }) => (
    <div className={styles.container}>
        {children}
    </div>
);

MainSection.propTypes = {
    chidren: PropTypes.node
};

export default MainSection;
