import React from 'react';
import Select from 'react-select';
import styles from './style.css';

const CategorySelector = prop => (
  <div>
    <p className={styles.title}>Search by category</p>
    <Select {...prop} />
  </div>
);
export default CategorySelector;
