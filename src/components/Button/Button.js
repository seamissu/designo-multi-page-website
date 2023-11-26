import React from 'react';
import styles from './Button.module.scss';

function Button({ children, className = '' }) {
  const buttonClassname = `${styles.wrapper} ${className}`;

  return <button className={buttonClassname}>{children}</button>;
}

export default Button;
