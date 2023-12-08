import React from 'react';
import styles from './GetInTouch.module.scss';

import Link from 'next/link';

import Button from '../Button';

function GetInTouch() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and
          find out how our expertise can help your business grow.
        </p>
      </div>
      <Button className={styles.button}>
        <Link href="/contact">Get in touch</Link>
      </Button>
    </div>
  );
}

export default GetInTouch;
