import React from 'react';
import styles from './DesignHero.module.scss';

function DesignHero({ type, description }) {
  return (
    <div className={styles.wrapper}>
      <h1>{type} Design</h1>
      <p>{description}</p>
    </div>
  );
}

export default DesignHero;
