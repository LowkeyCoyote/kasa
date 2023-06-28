import React from 'react'
import styles from './Profile.module.css'

export default function Profile(props) {
  return (
    <div className={styles.profileWrapper}>
        <div className={styles.profileName}>
            {props.firstname} <br />
            {props.lastname}
        </div>
        <img className={styles.thumbnail} src={props.thumbnail} alt="" />
    </div>
  )
}
