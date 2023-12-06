import React from 'react';
import styles from './ContactMain.module.scss';

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
        <form></form>
      </section>
    </main>
  );
}

export default ContactMain;
