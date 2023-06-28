import React from 'react'
import styles from './Collapse.module.css'
import { useState, useRef } from 'react';

import arrowCollapse from '../../assets/img/arrowCollapse.png'

export default function Collapse({label, children}) {

  const [open, setOpen] = useState(false);  
  const parentRef = useRef();

  const toggle = () =>{
    setOpen(!open)
  } 

  return (
    <div className={styles.collapseContainer}>
        <button className={styles.labelContainer} onClick={toggle}>
          <p>{label}</p>
          <img src={arrowCollapse}
           alt="arrow"
           className={open ? styles.arrowDown : styles.arrowUp}
           />
          </button>
        <div 
        className={styles.contentParent}
        ref={parentRef}
        
        style={open ? {
          height: parentRef.current.scrollHeight
        } : { height : "0px"}}>
           <div className={styles.content}>{children}</div>
       </div>
    </div>
  )
}
