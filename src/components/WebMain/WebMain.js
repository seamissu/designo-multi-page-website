import React from 'react';
import styles from './WebMain.module.scss';

import DesignHero from '../DesignHero';
import Card from '../Card';

function WebMain() {
  return (
    <main className={styles.wrapper}>
      <DesignHero type={`Web`} />
      <section className={styles.cards}>
        <Card src={'/web-design/desktop/image-express.jpg'} />
        <Card src={'/web-design/desktop/image-transfer.jpg'} />
        <Card src={'/web-design/desktop/image-photon.jpg'} />
        <Card src={'/web-design/desktop/image-builder.jpg'} />
        <Card src={'/web-design/desktop/image-blogr.jpg'} />
        <Card src={'/web-design/desktop/image-camp.jpg'} />
      </section>
    </main>
  );
}

export default WebMain;
