import React from 'react';
import styles from './Header.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import HamburgerIcon from '../HamburgerIcon';
import CloseIcon from '../CloseIcon';

function Header() {
  return (
    <header className={styles.wrapper}>
      <Image
        src="/shared/desktop/logo-dark.png"
        alt="website logo"
        width={196}
        height={27}
      />
      <nav className={styles.navwrapper}>
        <Link href="/">Our Company</Link>
        <Link href="/">Locations</Link>
        <Link href="/">Contact</Link>
      </nav>
      <button className={styles.button}>
        <HamburgerIcon />
      </button>
    </header>
  );
}

export default Header;
