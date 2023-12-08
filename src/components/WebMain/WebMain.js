import React from 'react';
import styles from './WebMain.module.scss';

import DesignHero from '../DesignHero';
import Card from '../Card';
import SuperLink from '../SuperLink';

function WebMain() {
  return (
    <main className={styles.wrapper}>
      <DesignHero
        type={`Web`}
        description={`We build websites that serve as powerful marketing tools and
        bring memorable brand experiences.`}
      />
      <section className={styles.cards}>
        <Card
          src={'/web-design/desktop/image-express.jpg'}
          name={'Express'}
          intro={
            'A multi-carrier shipping website for ecommerce businesses'
          }
        />
        <Card
          src={'/web-design/desktop/image-transfer.jpg'}
          name={'Transfer'}
          intro={
            'Site for low-cost money transfers and sending money within seconds'
          }
        />
        <Card
          src={'/web-design/desktop/image-photon.jpg'}
          name={'Photon'}
          intro={
            'A state-of-the-art music player with high-resolution audio and DSP effects'
          }
        />
        <Card
          src={'/web-design/desktop/image-builder.jpg'}
          name={'Builder'}
          intro={
            'Connects users with local contractors based on their location'
          }
        />
        <Card
          src={'/web-design/desktop/image-blogr.jpg'}
          name={'Blogr'}
          intro={
            'Blogr is a platform for creating an online blog or publication'
          }
        />
        <Card
          src={'/web-design/desktop/image-camp.jpg'}
          name={'Camp'}
          intro={
            'Get expert training in coding, data, design, and digital marketing'
          }
        />
      </section>

      <section className={styles.designwrapper}>
        <SuperLink
          className={styles.onlyondesktop}
          type={'App'}
          height={308}
          bgImageUrl={'/home/desktop/image-app-design.jpg'}
          linkURL={'/appdesign'}
        />
        <SuperLink
          className={styles.onlyondesktop}
          type={'Graphic'}
          height={308}
          bgImageUrl={'/home/desktop/image-graphic-design.jpg'}
          linkURL={'/graphicdesign'}
        />
        <SuperLink
          className={styles.onlyontablet}
          type={'App'}
          height={200}
          bgImageUrl={'/home/tablet/image-app-design.jpg'}
          linkURL={'/appdesign'}
        />
        <SuperLink
          className={styles.onlyontablet}
          type={'Graphic'}
          height={200}
          bgImageUrl={'/home/tablet/image-graphic-design.jpg'}
          linkURL={'/graphicdesign'}
        />
        <SuperLink
          className={styles.onlyonmobile}
          type={'App'}
          height={250}
          bgImageUrl={'/home/mobile/image-app-design.jpg'}
          linkURL={'/appdesign'}
        />
        <SuperLink
          className={styles.onlyonmobile}
          type={'Graphic'}
          height={250}
          bgImageUrl={'/home/mobile/image-graphic-design.jpg'}
          linkURL={'/graphicdesign'}
        />
      </section>
    </main>
  );
}

export default WebMain;
