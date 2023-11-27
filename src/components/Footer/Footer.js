import React from 'react';
import styles from './Footer.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import GetInTouch from '../GetInTouch';

import FacebookIcon from '../FacebookIcon';
import YoutubeIcon from '../YoutubeIcon';
import TwitterIcon from '../TwitterIcon';
import PinterestIcon from '../PinterestIcon';
import InstagramIcon from '../InstagramIcon';

function Footer() {
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
          <Link href="/">Our Company</Link>
          <Link href="/">Locations</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>

      <div className={styles.gridwrapper}>
        <div>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <p>{`Contact Us (Central Office)`}</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div className={styles.iconwrapper}>
          <FacebookIcon />
          <YoutubeIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </div>
      <GetInTouch />
    </footer>
  );
}

export default Footer;
