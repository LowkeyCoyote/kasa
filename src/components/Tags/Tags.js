import React from 'react'
import styles from './Tags.module.css'

export default function Tags(props) {
  return (
    <div className={styles.tag}>
        <span className={styles.text}>{props.text}</span>
    </div>
   
  )
}
