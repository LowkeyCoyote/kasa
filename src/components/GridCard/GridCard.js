import React from 'react'
import styles from './GridCard.module.css'

import Card from '../Card/Card'

import datas from '../../datas/data.json'

export default function GridCard() {

    const arrayDataCard = [];
    datas.forEach((house) => {
       arrayDataCard.push({id : house.id, img : house.cover, title : house.title})
    })

  return (
    <div className={styles.gridWrapper}>
        {arrayDataCard.map((house) => {
            return <Card
            cardImg={house.img}
            cardTitle={house.title}
            cardId={house.id}
            key={house.id}
            />
        })}
    </div>
  )
}
