import React, { useCallback, useState } from 'react';
import styles from './Nodes.module.css';
import mainnetsData from './mainnets';
import testnetsData from './testnets';
import Filter from '../Filter/Filter';

const filters = ['Mainnets', 'Testnets'];
const defaultFilter = filters[0];

const Nodes = () => {
  const [currentFilter, setCurrentFilter] = useState(defaultFilter);

  const onChangeFilter = useCallback(filter => setCurrentFilter(filter), []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.filters}>
        {filters.map(filter => (
          <Filter
            key={filter}
            filter={filter}
            isCurrentFilter={filter === currentFilter}
            onPress={() => onChangeFilter(filter)}
          />
        ))}
      </div>
      <div className={styles.nodesContainer}>
        <div className={currentFilter === filters[1] ? styles.hiddenNodes : styles.visibleMainnets}>
          {mainnetsData.map(item => {
            return (
              <div className={styles.row}>
                <a className={styles.link} href={item.link}>
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
        <div className={currentFilter === filters[0] ? styles.hiddenNodes : styles.visibleTestnets}>
          {testnetsData.map(item => {
            return (
              <div className={styles.row}>
                {item.link ? (
                  <a className={styles.link} href={item.link}>
                    {item.name}
                  </a>
                ) : (
                  <div>{item.name}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nodes;
