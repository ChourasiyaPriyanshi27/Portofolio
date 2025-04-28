import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './about.module.css'
const About = () => {
  return (
   <section className={styles.container} id='about'>
    <h1 className={styles.title}>About</h1>
    <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
        <img src={getImageUrl('skills/frontend.png')} className={styles.aboutImage}/>
        <div className={styles.aboutItemText}>
          <h3>Frontend Developer</h3>
          <p>As a Frontend Developer, I specialize in building dynamic and responsive user interfaces using technologies like React, JavaScript, HTML, and CSS. I have a strong understanding of UI design, using Figma to create intuitive and visually appealing designs. With a passion for creating seamless user experiences, I focus on clean code, performance optimization, and staying up-to-date with the latest industry trends</p>  
        </div>
      </li>
      {/* <li className={styles.aboutItem}>
        <img src={getImageUrl('skills/ui.png')} className={styles.aboutImage}/>
        <div  className={styles.aboutItemText}>
          <h3>Ui Designer</h3>
          <p>I have designed multiple landing pages and created design systems. I specialize in user-centric designs, ensuring that interfaces are both aesthetically pleasing and functional. My work includes creating wireframes, prototypes, and high-fidelity designs.</p>
          <p>With a strong understanding of design principles, I use tools like Figma and Adobe XD to craft intuitive layouts and interactive elements, focusing on usability and visual consistency across platforms.</p>
          </div>
      </li> */}
    </ul>
   </section>
  )
}

export default About
