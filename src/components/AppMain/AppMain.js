import React from 'react';
import styles from './AppMain.module.scss';

import DesignHero from '../DesignHero';
import Card from '../Card';
import SuperLink from '../SuperLink';

function AppMain() {
  return (
    <main className={styles.wrapper}>
      <DesignHero
        type={`App`}
        description={`Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.`}
      />
      <section className={styles.cards}>
        <Card
          src={'/app-design/desktop/image-airfilter.jpg'}
          name={'Airfilter'}
          intro={
            'Solving the problem of poor indoor air quality by filtering the air'
          }
        />
        <Card
          src={'/app-design/desktop/image-eyecam.jpg'}
          name={'Eyecam'}
          intro={
            'Product that lets you edit your favorite photos and videos at any time'
          }
        />
        <Card
          src={'/app-design/desktop/image-faceit.jpg'}
          name={'Faceit'}
          intro={
            'Get to meet your favorite internet superstar with the faceit app'
          }
        />
        <Card
          src={'/app-design/desktop/image-todo.jpg'}
          name={'Todo'}
          intro={
            'A todo app that features cloud sync with light and dark mode'
          }
        />
        <Card
          src={'/app-design/desktop/image-loopstudios.jpg'}
          name={'Loopstudios'}
          intro={'A VR experience app made for Loopstudios'}
        />
      </section>
      <section className={styles.designwrapper}>
        <SuperLink
          className={styles.onlyondesktop}
          type={'Web'}
          height={308}
          bgImageUrl={'/home/desktop/image-web-design-small.jpg'}
          linkURL={'/webdesign'}
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
          type={'Web'}
          height={200}
          bgImageUrl={'/home/tablet/image-web-design.jpg'}
          linkURL={'/webdesign'}
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
          type={'Web'}
          height={250}
          bgImageUrl={'/home/mobile/image-web-design.jpg'}
          linkURL={'/webdesign'}
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

export default AppMain;
