import React from 'react';
import styles from './WebMain.module.scss';

import DesignHero from '../DesignHero';
import Card from '../Card';
import SuperLink from '../SuperLink';

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

      <section className={styles.designwrapper}>
        <SuperLink
          className={styles.onlyondesktop}
          type={'App'}
          height={308}
          bgImageUrl={'/home/desktop/image-app-design.jpg'}
          linkURL={'/'}
        />
        <SuperLink
          className={styles.onlyondesktop}
          type={'Graphic'}
          height={308}
          bgImageUrl={'/home/desktop/image-graphic-design.jpg'}
          linkURL={'/'}
        />
      </section>
    </main>
  );
}

export default WebMain;
