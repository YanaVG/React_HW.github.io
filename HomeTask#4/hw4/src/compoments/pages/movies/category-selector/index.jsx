import React from 'react';
import Select from 'react-select';
import selectorOptions from '../selectors/selector-options';
import styles from './style.css';

const CategorySelector = props => (
  <div className={styles.block}>
    <p className={styles.title}>Search by category</p>
    <Select 
      className={styles.select}
      options={selectorOptions}
      {...props}
    />
  </div>
);
export default CategorySelector;
