import React from 'react';
import styles from './DesignHero.module.scss';

function DesignHero({ type }) {
  return (
    <div className={styles.wrapper}>
      <h1>{type} Design</h1>
      <p>
        We build websites that serve as powerful marketing tools and
        bring memorable brand experiences.
      </p>
    </div>
  );
}

export default DesignHero;
