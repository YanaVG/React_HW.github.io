import React from 'react';
import styles from './button.css';

const Button = ({ label, onDelete }) => (
   <button className={styles.buttom} onClick={onDelete}>{label}</button>
);

export default Button;