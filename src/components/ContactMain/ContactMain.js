import React from 'react';
import styles from './ContactMain.module.scss';

import Button from '../Button';

import CanadaIllustration from '../CanadaIllustration';
import AustraliaIllustration from '../AustraliaIllustration';
import UnitedKingdomIllustration from '../UnitedKingdomIllustration';

function ContactMain() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.contactus}>
        <div>
          <h1>Contact us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your
            project or idea and find out how we can help your business
            grow. If you are looking for unique digital experiences
            that’s relatable to your users, drop us a line.
          </p>
        </div>
        <form className={styles.contactform}>
          <input type="text" required={true} placeholder="Name" />
          <input
            type="email"
            required={true}
            placeholder="Email Address"
          />
          <input type="text" required={true} placeholder="Phone" />
          <textarea
            required={true}
            placeholder="Your Message"
          ></textarea>
          <Button className={styles.whitebutton}>Submit</Button>
        </form>
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

export default ContactMain;
