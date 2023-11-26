import React from 'react';
import styles from './Header.module.scss';

import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className={styles.wrapper}>
      <Image
        src="/shared/desktop/logo-dark.png"
        alt="website logo"
        width={196}
        height={24}
      />
      <nav className={styles.navwrapper}>
        <Link href="/">Our Company</Link>
        <Link href="/">Locations</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
