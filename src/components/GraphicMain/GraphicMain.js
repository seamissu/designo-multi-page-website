import React from 'react';
import styles from './GraphicMain.module.scss';

import DesignHero from '../DesignHero';
import Card from '../Card';
import SuperLink from '../SuperLink';

function GraphicMain() {
  return (
    <main className={styles.wrapper}>
      <DesignHero
        type={`Graphic`}
        description={`We deliver eye-catching branding materials that are tailored to meet your business objectives.`}
      />
      <section className={styles.cards}>
        <Card
          src={'/graphic-design/desktop/image-change.jpg'}
          name={'Tim Brown'}
          intro={
            'A book cover designed for Tim Brown’s new release, ‘Change’'
          }
        />
        <Card
          src={'/graphic-design/desktop/image-boxed-water.jpg'}
          name={'Boxed water'}
          intro={'A simple packaging concept made for Boxed Water'}
        />
        <Card
          src={'/graphic-design/desktop/image-science.jpg'}
          name={'Science!'}
          intro={
            'A poster made in collaboration with the Federal Art Project'
          }
        />
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
          type={'Web'}
          height={308}
          bgImageUrl={'/home/desktop/image-web-design-small.jpg'}
          linkURL={'/'}
        />
        <SuperLink
          className={styles.onlyontablet}
          type={'App'}
          height={200}
          bgImageUrl={'/home/tablet/image-app-design.jpg'}
          linkURL={'/'}
        />
        <SuperLink
          className={styles.onlyontablet}
          type={'Web'}
          height={200}
          bgImageUrl={'/home/tablet/image-web-design.jpg'}
          linkURL={'/'}
        />
        <SuperLink
          className={styles.onlyonmobile}
          type={'App'}
          height={250}
          bgImageUrl={'/home/mobile/image-app-design.jpg'}
          linkURL={'/'}
        />
        <SuperLink
          className={styles.onlyonmobile}
          type={'Web'}
          height={250}
          bgImageUrl={'/home/mobile/image-web-design.jpg'}
          linkURL={'/'}
        />
      </section>
    </main>
  );
}

export default GraphicMain;
