import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

import NavbarLogo from '../../assets/img/kasaNavbar.png'
import Navbar from '../Navbar/Navbar'


export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.headerLogo} src={NavbarLogo} alt="Logo de Kasa" />
      </Link>
      <Navbar />
      </header>
  )
}
