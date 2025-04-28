import React from 'react';
import styles from '../Projects/ProjectCard.module.css';
import { getImageUrl } from '../../utils';

const ProjectCard = ({ project: {text, title, description, skills, imageSrc } }) => {
  console.log(imageSrc,"@@@@@@@@@@@@@@@@@")
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt="projectImg"
        className={styles.image} // use className not style
      />
      <div className={styles.content}>
        <div className={styles.contentItem}>
        <h3 className={styles.title}>{title}</h3>
        <h3>{text}</h3>
        </div>
      <p className={styles.description}>
        {description}
      </p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
