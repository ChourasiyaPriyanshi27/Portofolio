import React from 'react'
import { getImageUrl } from '../../utils'
import styles from '../Hero/Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priyanshi</h1>
      <p className={styles.description}>I'm a passionate software engineer dedicated to building high-quality web applications. I focus on creating accessible, user-centered products and continually improving my skills for better solutions</p>
      <a href='mailto:priyanshichourasiya91@gmail.com' className={styles.contactBtn}>Contact me</a>
        </div>
      <img  src={getImageUrl("hero/ghibli.png")} alt='hero image of me' className={styles.heroImg}/>
    <div className={styles.topBlur}  />
    <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
