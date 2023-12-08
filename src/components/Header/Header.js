'use client';

import React from 'react';
import styles from './Header.module.scss';

import * as Dialog from '@radix-ui/react-dialog';

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
        <Link href="/about">Our Company</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className={styles.button}>
            <HamburgerIcon />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={styles.content}>
            <section className={styles.modalheader}>
              <Image
                src="/shared/desktop/logo-dark.png"
                alt="website logo"
                width={196}
                height={27}
              />
              <Dialog.Close asChild>
                <button className={styles.button}>
                  <CloseIcon />
                </button>
              </Dialog.Close>
            </section>
            <nav>
              <ul>
                <li>
                  <Link href="/about">Our Company</Link>
                </li>
                <li>
                  <Link href="/locations">Locations</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}

export default Header;
