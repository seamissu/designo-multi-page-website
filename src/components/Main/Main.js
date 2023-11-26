import React from 'react';
import styles from './Main.module.scss';

import Link from 'next/link';
import Button from '../Button';
import ArrowIcon from '../ArrowIcon';

function Main() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.herowrapper}>
        <h1>
          Award-winning custom designs and digital branding solutions
        </h1>
        <p>
          With over 10 years in the industry, we are experienced in
          creating fully responsive websites, app design, and engaging
          brand experiences. Find out more about our services.
        </p>
        <Button className={styles.whitebutton}>Learn more</Button>

        <div className={styles.sameashero}></div>
      </section>

      <section className={styles.designwrapper}>
        <Link href="/" className={styles.weblink}>
          <div className={styles.webdesign}></div>
          <div className={styles.floatingwords}>
            <h2>Web Design</h2>
            <div>
              <p>View Projects</p>
              <ArrowIcon />
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.applink}>
          <div className={styles.appdesign}></div>
        </Link>
        <Link href="/" className={styles.graphiclink}>
          <div className={styles.graphicdesign}></div>
        </Link>
      </section>

      <section></section>
    </main>
  );
}

export default Main;
