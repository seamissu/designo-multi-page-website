import React from 'react';
import styles from './WebMain.module.scss';

import DesignHero from '../DesignHero';

function WebMain() {
  return (
    <main className={styles.wrapper}>
      <DesignHero type={`Web`} />
    </main>
  );
}

export default WebMain;
