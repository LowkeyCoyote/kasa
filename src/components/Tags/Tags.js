import React from 'react'
import styles from './Tags.module.css'

export default function Tags({text}) {
  return (
    <div className={styles.tag}>
        <span className={styles.text}>{text}</span>
    </div>
   
  )
}
