import React from 'react';
import { getImageUrl } from '../../utils';
import styles from '../About/About.module.css';


const About = () => {
  return (
      <section className={styles.container} id="about">
          
          <h2 className={styles.title}> About</h2>

          <div className={styles.content}>
              
              <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Me setting with a laptop" />

              <ul className={styles.aboutItems}>
                  
                  <li className={styles.aboutItem}>
                      <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                      <div  className={styles.aboutItemText}>
                          <h3>Frontend Developer</h3>
                          <p>I'm a front-end developer with experience
                              in building responsive and optimized sites</p>
                        </div>
                  </li>

                  
                   <li  className={styles.aboutItem}>
                      <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                      <div  className={styles.aboutItemText}>
                          <h3>Backend Developer</h3>
                          <p>I have experience developing fast and
                              optimised back-end systems and APIss</p>
                        </div>
                  </li>

                  
                     <li  className={styles.aboutItem}>
                      <img src={getImageUrl("about/uiIcon.png")} alt="Server Icon" />
                      <div  className={styles.aboutItemText}>
                          <h3>UI/UX Developer</h3>
                          <p>I have designed multiple landing pages and
                              have created design systems as well</p>   
                        </div>
                  </li>



                  

                </ul>
          </div>

      </section>
      
  )
}

export default About;
