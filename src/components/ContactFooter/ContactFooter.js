import React from 'react';
import styles from './ContactFooter.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import FacebookIcon from '../FacebookIcon';
import YoutubeIcon from '../YoutubeIcon';
import TwitterIcon from '../TwitterIcon';
import PinterestIcon from '../PinterestIcon';
import InstagramIcon from '../InstagramIcon';

function ContactFooter() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.logoandlink}>
        <Image
          src="/shared/desktop/logo-light.png"
          alt="website logo"
          width={196}
          height={27}
        />
        <div className={styles.linkwrapper}>
          <Link href="/about">Our Company</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className={styles.gridwrapper}>
        <div className={styles.mobilelinkwrapper}>
          <Link href="/about">Our Company</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <p>Designo Central Office</p>
          <p className={styles.regular}>3886 Wellington Street</p>
          <p className={styles.regular}>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <p>{`Contact Us (Central Office)`}</p>
          <p className={styles.regular}>P : +1 253-863-8967</p>
          <p className={styles.regular}>M : contact@designo.co</p>
        </div>
        <div className={styles.iconwrapper}>
          <FacebookIcon />
          <YoutubeIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;
