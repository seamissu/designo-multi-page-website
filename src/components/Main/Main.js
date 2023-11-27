import React from 'react';
import styles from './Main.module.scss';

import Button from '../Button';
import SuperLink from '../SuperLink';

import PassionateIcon from '../PassionateIcon';
import ResourcefulIcon from '../ResourcefulIcon';
import FriendlyIcon from '../FriendlyIcon';

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
      </section>

      <section className={styles.designwrapper}>
        <SuperLink
          type={`Web`}
          height={640}
          bgImageUrl={'/home/desktop/image-web-design-large.jpg'}
          className={styles.weblink}
          linkURL={'/'}
        />

        <SuperLink
          type={`App`}
          height={308}
          bgImageUrl={'/home/desktop/image-app-design.jpg'}
          className={styles.applink}
          linkURL={'/'}
        />

        <SuperLink
          type={`Graphic`}
          height={308}
          bgImageUrl={'/home/desktop/image-graphic-design.jpg'}
          className={styles.graphiclink}
          linkURL={'/'}
        />

        <SuperLink
          type={`Web`}
          height={200}
          bgImageUrl={'/home/tablet/image-web-design.jpg'}
          className={styles.webtablet}
          linkURL={'/'}
        />

        <SuperLink
          type={`App`}
          height={200}
          bgImageUrl={'/home/tablet/image-app-design.jpg'}
          className={styles.apptablet}
          linkURL={'/'}
        />

        <SuperLink
          type={`Graphic`}
          height={200}
          bgImageUrl={'/home/tablet/image-graphic-design.jpg'}
          className={styles.graphictablet}
          linkURL={'/'}
        />
      </section>

      <section className={styles.valuewrapper}>
        <article className={styles.articlewrapper}>
          <div>
            <PassionateIcon />
          </div>
          <div>
            <h3>Passionate</h3>
            <p>
              Each project starts with an in-depth brand research to
              ensure we only create products that serve a purpose. We
              merge art, design, and technology into exciting new
              solutions.
            </p>
          </div>
        </article>
        <article className={styles.articlewrapper}>
          <div className={styles.iconwrapper}>
            <ResourcefulIcon />
          </div>
          <div className={styles.introwrapper}>
            <h3>Resourceful</h3>
            <p>
              Everything that we do has a strategic purpose. We use an
              agile approach in all of our projects and value customer
              collaboration. It guarantees superior results that
              fulfill our clients’ needs.
            </p>
          </div>
        </article>
        <article className={styles.articlewrapper}>
          <div className={styles.iconwrapper}>
            <FriendlyIcon />
          </div>
          <div className={styles.introwrapper}>
            <h3>Friendly</h3>
            <p>
              We are a group of enthusiastic folks who know how to put
              people first. Our success depends on our customers, and
              we strive to give them the best experience a company can
              provide.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main;
