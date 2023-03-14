import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.Hero}>
        <div className={styles.Heading}>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={require("../assets/vibrating-headphone1.png")} width="212" alt="headphones" />
        </div>
    </div>
  )
}

export default Hero