import React from 'react';
import styles from './Card.module.scss';

import Image from 'next/image';

function Card({ src }) {
  return (
    <article className={styles.wrapper}>
      <Image
        className={styles.displaypic}
        src={src}
        alt="a display screenshot"
        width={700}
        height={640}
      />
      <div>
        <h3>Express</h3>
        <p>
          A multi-carrier shipping website for ecommerce businesses
        </p>
      </div>
    </article>
  );
}

export default Card;
