import React from 'react'
import styles from './Banner.module.css'

export default function Banner(props) {
  return (
    <div 
    className={styles.bannerWrapper}
    style={{backgroundImage:`url(${props.bannerImg})`}}
    >
        <div class={styles.bannerOverlay}></div>
        <p>{props.bannerText}</p>
    </div>
  )
}
