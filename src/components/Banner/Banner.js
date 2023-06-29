import React from 'react'
import styles from './Banner.module.css'

export default function Banner({bannerImg, bannerText}) {
  return (
    <div 
    className={styles.bannerWrapper}
    style={{backgroundImage:`url(${bannerImg})`}}
    >
        <div className={styles.bannerOverlay}></div>
        <p>{bannerText}</p>
    </div>
  )
}
