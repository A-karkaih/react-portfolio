
import styles from './App.module.css';
import About from './cpmponents/About/About';
import Exprience from './cpmponents/Experience/Exprience';
import Hero from './cpmponents/Hero/Hero';
import Navbar from './cpmponents/Navbar/Navbar';
import Projects from './cpmponents/Projects/projects';
import Contact from './cpmponents/Contact/Contact';

function App() {

  return (
    
    <div className={styles.App}>
      
      <Navbar />
      <Hero />
      <About />
      <Exprience />
      <Projects />
      <Contact />

    </div>
  
  )

}

export default App;
