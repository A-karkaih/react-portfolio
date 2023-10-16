
import styles from './App.module.css';
import About from './cpmponents/About/About';
import Exprience from './cpmponents/Experience/Exprience';
import Hero from './cpmponents/Hero/Hero';
import Navbar from './cpmponents/Navbar/Navbar';

function App() {

  return (
    
    <div className={styles.App}>
      
      <Navbar />
      <Hero />
      <About />
      <Exprience />
    </div>
  
  )

}

export default App;
