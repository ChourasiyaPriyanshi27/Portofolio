import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
const Contact = () => {
 return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to react out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <EmailIcon />
            <a href="mailto:priyanshichourasiya91@gmail.com">
            priyanshichourasiya91@gmail.com
          </a>
                  </li>
        <li className={styles.link}>
            <LinkedInIcon />
            <a  target="_blank" href='https://www.linkedin.com/in/priyanshichourasiya'>linkedin.com</a>
        </li>
        <li className={styles.link}>
            <GitHubIcon />
            <a target='_blank' href="https://github.com/ChourasiyaPriyanshi27">github.com</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
