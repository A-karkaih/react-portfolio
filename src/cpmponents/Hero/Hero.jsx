import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';



const Hero = () => {

    return (
        <section className={styles.container}>

            <div className={styles.content}>
                <h1 className={styles.title}>HI, I'am Achraf Karkaih</h1>
                <p className={styles.description}> I am a junior software engineer with a focus on full-stack web development.</p>
                <a  className={styles.contactBtn} href="mailto:akarkaih@gmail.com"> Contact Me</a>
            </div>

            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" />

            <div className={styles.topBlur}>
               
                
            </div>

            <div className={styles.bottomBlur}>
                
            </div>
            
        </section>

    );
}

export default Hero;
