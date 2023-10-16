
import styles from './App.module.css';
import About from './cpmponents/About/About';
import Hero from './cpmponents/Hero/Hero';
import Navbar from './cpmponents/Navbar/Navbar';

function App() {

  return (
    
    <div className={styles.App}>
      
      <Navbar />
      <Hero />
      <About />
    </div>
  
  )

}

export default App;
