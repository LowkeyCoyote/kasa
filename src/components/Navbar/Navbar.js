import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className={styles.links}>
        <NavLink 
        to="/"
        className={({isActive}) => isActive ? styles.active : undefined} 
        end
        >
            Accueil
        </NavLink>
        <NavLink 
        to="/about"
        className={({isActive}) => isActive ? styles.active : undefined} 
        >
            A Propos
        </NavLink>
    </nav>
  )
}
