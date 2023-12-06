import React from 'react';
import styles from './LocationsMain.module.scss';

import Image from 'next/image';

function LocationsMain() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.canada}>
        <div className={styles.canadadetails}>
          <h2>Canada</h2>
          <div>
            <p>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div>
            <p>Contact</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
        </div>
        <Image
          className={styles.canadamap}
          src="/locations/desktop/image-map-canada.png"
          alt=""
          width={375}
          height={320}
        />
        <Image
          className={styles.canadamaptablet}
          src="/locations/tablet/image-map-canada.png"
          alt=""
          width={689}
          height={326}
        />
      </section>

      <section className={styles.australia}>
        <Image
          className={styles.australiamap}
          src="/locations/desktop/image-map-australia.png"
          alt=""
          width={375}
          height={320}
        />
        <Image
          className={styles.australiamaptablet}
          src="/locations/tablet/image-map-australia.png"
          alt=""
          width={689}
          height={326}
        />
        <div className={styles.australiadetails}>
          <h2>Australia</h2>
          <div>
            <p>Designo AU Office</p>
            <p>19 Balonne Street</p>
            <p>New South Wales 2443</p>
          </div>
          <div>
            <p>Contact</p>
            <p>P : (02) 6720 9092</p>
            <p>M : contact@designo.au</p>
          </div>
        </div>
      </section>
      <section className={styles.uk}>
        <div className={styles.ukdetails}>
          <h2>United Kingdom</h2>
          <div>
            <p>Designo UK Office</p>
            <p>13 Colorado Way</p>
            <p>Rhyd-y-fro SA8 9GA</p>
          </div>
          <div>
            <p>Contact</p>
            <p>P : 078 3115 1400</p>
            <p>M : contact@designo.uk</p>
          </div>
        </div>
        <Image
          className={styles.ukmap}
          src="/locations/desktop/image-map-united-kingdom.png"
          alt=""
          width={375}
          height={320}
        />
        <Image
          className={styles.ukmaptablet}
          src="/locations/tablet/image-map-uk.png"
          alt=""
          width={689}
          height={326}
        />
      </section>
    </main>
  );
}

export default LocationsMain;
