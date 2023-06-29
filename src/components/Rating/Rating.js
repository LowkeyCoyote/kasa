import React from 'react'
import styles from './Rating.module.css'

import orangeStar from '../../assets/img/orangeStar.png'
import greyStar from '../../assets/img/greyStar.png'


export default function Rating({rate}) {

    const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.rateContainer}>
        {stars.map((i) => (rate) >= i ? 
        <img src={orangeStar}
         alt="orange star"
         key={i}
         />
        
        : <img src={greyStar}
        alt="grey star"
        key={i}
        />)}
      
    </div>
  )
}
