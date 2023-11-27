import React from 'react';
import Link from 'next/link';
import styles from './SuperLink.module.scss';

import ArrowIcon from '../ArrowIcon';

function SuperLink({
  className = '',
  type,
  height,
  bgImageUrl,
  linkURL = '/',
}) {
  const linkClassname = `${styles.linkwrapper} ${className}`;
  const designStyle = {
    height: `${height}px`,
    backgroundImage: 'url(' + bgImageUrl + ')',
  };
  const floatingStyle = { height: `${height}px` };

  return (
    <Link href={linkURL} className={linkClassname}>
      <div style={designStyle} className={styles.designwrapper}></div>
      <div style={floatingStyle} className={styles.floatingwords}>
        <h2>{type} Design</h2>
        <div>
          <p>View Projects</p>
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
}

export default SuperLink;
