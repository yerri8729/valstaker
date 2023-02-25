import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, isCurrentFilter, onPress }) => {
  return (
    <button className={styles.filter} onClick={onPress}>
      <div className={isCurrentFilter ? styles.currentFilterTitle : styles.filterTitle}>{filter}</div>
    </button>
  );
};

export default Filter;
