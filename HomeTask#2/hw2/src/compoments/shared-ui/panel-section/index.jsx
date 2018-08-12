import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const PanelSection = ({ children }) => (
    <div className={styles.panel_section}>
        {children}
    </div>
);

PanelSection.propTypes = {
    chidren: PropTypes.node
};

export default PanelSection;