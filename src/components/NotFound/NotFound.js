import React from 'react'
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className={styles.NotFoundWrapper}>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="./">
            Retourner sur la page d’accueil
        </Link>

    </div>
  )
}
