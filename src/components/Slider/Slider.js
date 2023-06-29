import React from 'react'
import styles from './Slider.module.css'
import prevArrow from '../../assets/img/ArrowPrev.png';
import nextArrow from '../../assets/img/ArrowNext.png';
import { useState } from 'react';

export default function Slider({sliderImgs}) {

    const [sliderIndex, setSliderIndex] = useState(0);

    const toggleImage = (indexIncrement) => {

        let newIndex;
        if(indexIncrement + sliderIndex > (sliderImgs.length - 1)){
            newIndex = 0
        }
        else if(indexIncrement + sliderIndex < 0){
            newIndex = sliderImgs.length - 1;
        }
        else{
            newIndex = indexIncrement + sliderIndex
        }

        setSliderIndex(newIndex)
    }

  return (
    <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
            <img src={sliderImgs[sliderIndex]} alt="" className={styles.sliderImg} />
            <button
            className={`${styles.arrow} ${styles.prevButton}`}   
            onClick={() => toggleImage(-1)}>
                <img src={prevArrow} alt=""/>
            </button>

            <button 
            className={`${styles.arrow} ${styles.nextButton}`}
            onClick={() => toggleImage(1)}>
                <img src={nextArrow} alt="" />
            </button>
            <p className={styles.indexInfo}>{sliderIndex+1} / {sliderImgs.length}</p>
        </div>
    </div>
  )
}
