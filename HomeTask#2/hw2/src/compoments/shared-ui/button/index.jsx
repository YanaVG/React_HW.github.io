import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Button = ({ label, onClick, active, type }) => (
    <button className={active ? styles.active : styles.button} onClick={onClick} type={type}>
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.string,
    type: PropTypes.string
};

Button.defaultProp = {
    label: 'btn',
    onClick: () => null,
    active: '',
    type: 'submit' 
};

export default Button;