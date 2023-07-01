import React from 'react'
import styles from './Slider.module.css'
import prevArrow from '../../assets/img/arrowPrev.png';
import nextArrow from '../../assets/img/arrowNext.png';
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


    if (sliderImgs.length === 1) {
        return (
          <div className={styles.sliderWrapper}>
            <div className={styles.slider}>
              <img
                src={sliderImgs[0]}
                alt=""
                className={styles.sliderImg}
              />
              <p className={styles.indexInfo}>1 / 1</p>
            </div>
          </div>
        );
      }


  return (
    <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
            <img src={sliderImgs[sliderIndex]} alt="Slide" className={styles.sliderImg} />
            <button
            className={`${styles.arrow} ${styles.prevButton}`}   
            onClick={() => toggleImage(-1)}>
                <img src={prevArrow} alt="previous"/>
            </button>

            <button 
            className={`${styles.arrow} ${styles.nextButton}`}
            onClick={() => toggleImage(1)}>
                <img src={nextArrow} alt="next" />
            </button>
            <p className={styles.indexInfo}>{sliderIndex+1} / {sliderImgs.length}</p>
        </div>
    </div>
  )
}
