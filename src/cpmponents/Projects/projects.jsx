import React from 'react';
import Projets from "../../data/projects.json"
import ProjectCard from './projectCard';
import styles from "../Projects/projects.module.css"

const Projects = () => {
    return (
         <section className={styles.container} id="projects">
         <h2 className={styles.title}>Projects</h2>
         <div className={styles.projects}>
                {
                    Projets.map((project, id) => {
                        
                        return (<ProjectCard key={id} project={project} /> );
                            
                          
                        
                        
                    })
 }

            </div>
        </section>
    );
}

export default Projects;
