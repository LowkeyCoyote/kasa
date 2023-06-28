import React from 'react';

import styles from './Footer.module.css';
import footerLogo from '../../assets/img/kasaWhite.png';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
        <img className={styles.footerImg} src={footerLogo} alt='Logo footer' />
        <h3 className={styles.footerTitle}>© 2020 Kasa. All rights reserved</h3>
    </footer>
  )
}
