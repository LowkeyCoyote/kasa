import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({cardId, cardImg, cardTitle}) {
  return (
    <Link 
    className={styles.card} 
    to={`/housing/${cardId}`}
    style={{backgroundImage:`url(${cardImg})`}}
    >
            <h2>{cardTitle}</h2>
    </Link>
  )
}
