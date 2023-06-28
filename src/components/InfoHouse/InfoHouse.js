import React from 'react'
import styles from './infoHouse.module.css'

import Tags from '../Tags/Tags'
import Profile from '../Profile/Profile'
import Rating from '../Rating/Rating'

export default function InfoHouse({houseTitle, location, tags, firstname, lastname, thumbnail, rate}) {
  return (
    <div className={styles.infoHouseWrapper}>
        <div className={styles.locationWrapper}>
            <h1>{houseTitle}</h1>
            <span className={styles.location}>{location}</span>
            <div className={styles.tagsContainer}>
                {tags.map((tag, index) => <Tags key={`${tag}-${index}`} text={tag} />
                )}
            </div>
        </div>

        <div className={styles.profileInfo}>
            <Profile
            firstname={firstname}
            lastname={lastname}
            thumbnail={thumbnail}
            />
            <Rating
            rate={rate}
            />
        </div>
    </div>
  )
}
