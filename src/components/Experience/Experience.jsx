import React from "react";
import skills from '../../components/data/skills.json';
import history from '../../components/data/history.json';
import styles from './Experience.module.css'
import { getImageUrl } from "../../utils";
export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}> 
                {skills.map((skill,id) => {
                    return (
                        <div key={id} className={styles.skill}>
                         <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt="html image"/>
                         </div>
                         <p>{skill.title}</p>
                        </div>
                    )
                })}
            </div>
            <ul className={styles.history}>
                {
                    history.map((historyItem , id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                              <div className={styles.historyItemDetails}>
                                <h3>{historyItem.organisation}</h3>
                                <h4>{historyItem.role}</h4>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>{historyItem.experience.map((experience,id) => {
                                    return (
                                        <li key={id} className={styles.experience}>{experience}</li>
                                    )
                                })}</ul>
                              </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </section>
    )
}