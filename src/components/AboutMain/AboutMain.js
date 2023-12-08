import React from 'react';
import styles from './AboutMain.module.scss';

import Image from 'next/image';
import Link from 'next/link';
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
        <Image
          className={styles.aboutusimgtablet}
          alt=""
          src="/about/tablet/image-about-hero.jpg"
          width={689}
          height={320}
        />
        <Image
          className={styles.aboutusimgmobile}
          alt=""
          src="/about/mobile/image-about-hero.jpg"
          width={375}
          height={320}
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
        <Image
          className={styles.talentimgtablet}
          alt=""
          src="/about/tablet/image-world-class-talent.jpg"
          width={689}
          height={320}
        />
        <Image
          className={styles.talentimgmobile}
          alt=""
          src="/about/mobile/image-world-class-talent.jpg"
          width={375}
          height={320}
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
              <Link href="/locations">See location</Link>
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
              <Link href="/locations">See location</Link>
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
              <Link href="/locations">See location</Link>
            </Button>
          </div>
        </article>
      </section>
      <section className={styles.realdeal}>
        <div className={styles.realdealwords}>
          <h2>The real deal</h2>
          <p>
            As strategic partners in our clients’ businesses, we are
            ready to take on any challenge as our own. Solving real
            problems require empathy and collaboration, and we strive
            to bring a fresh perspective to every opportunity. We make
            design and technology more accessible and give you tools
            to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating
            ways. By combining business and marketing strategies, we
            inspire audiences to take action and drive real results.
          </p>
        </div>
        <Image
          className={styles.realdealimg}
          src="/about/desktop/image-real-deal.jpg"
          alt=""
          width={476}
          height={640}
        />
        <Image
          className={styles.realdealimgtablet}
          src="/about/tablet/image-real-deal.jpg"
          alt=""
          width={689}
          height={320}
        />
        <Image
          className={styles.realdealimgmobile}
          src="/about/mobile/image-real-deal.jpg"
          alt=""
          width={375}
          height={320}
        />
      </section>
    </main>
  );
}

export default AboutMain;
