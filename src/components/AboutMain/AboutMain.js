import React from 'react';
import styles from './AboutMain.module.scss';

import Image from 'next/image';
import Button from '../Button';

import CanadaIllustration from '../CanadaIllustration';
import AustraliaIllustration from '../AustraliaIllustration';
import UnitedKingdomIllustration from '../UnitedKingdomIllustration';

function AboutMain() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.aboutus}>
        <div className={styles.aboutuswords}>
          <h1>About us</h1>
          <p>
            {`Founded in 2010, we are a creative agency that produces
            lasting results for our clients. We’ve partnered with many
            startups, corporations, and nonprofits alike to craft
            designs that make real impact. We’re always looking
            forward to creating brands, products, and digital
            experiences that connect with our clients' audiences.`}
          </p>
        </div>
        <Image
          className={styles.aboutusimg}
          alt=""
          src="/about/desktop/image-about-hero.jpg"
          width={476}
          height={480}
        />
      </section>
      <section className={styles.talent}>
        <Image
          className={styles.talentimg}
          alt=""
          src="/about/desktop/image-world-class-talent.jpg"
          width={476}
          height={640}
        />
        <div className={styles.talentwords}>
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and
            technologists. Every design is thoughtfully crafted from
            concept to launch, ensuring success in its given market.
            We are constantly updating our skills in a myriad of
            platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely
            interested in form — content and meaning are just as
            important. We give great importance to craftsmanship,
            service, and prompt delivery. Clients have always been
            impressed with our high-quality outcomes that encapsulates
            their brand’s story and mission.
          </p>
        </div>
      </section>
      <section className={styles.countrywrapper}>
        <article className={styles.articlewrapper}>
          <div>
            <CanadaIllustration />
          </div>
          <div>
            <h3>Canada</h3>
            <Button className={styles.peachbutton}>
              See location
            </Button>
          </div>
        </article>
        <article className={styles.articlewrapper}>
          <div>
            <AustraliaIllustration />
          </div>
          <div>
            <h3>Australia</h3>
            <Button className={styles.peachbutton}>
              See location
            </Button>
          </div>
        </article>
        <article className={styles.articlewrapper}>
          <div>
            <UnitedKingdomIllustration />
          </div>
          <div>
            <h3>United Kingdom</h3>
            <Button className={styles.peachbutton}>
              See location
            </Button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default AboutMain;
