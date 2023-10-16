
import styles from './App.module.css';
import Hero from './cpmponents/Hero/Hero';
import Navbar from './cpmponents/Navbar/Navbar';

function App() {

  return (
    
    <div className={styles.App}>
      
      <Navbar />
      <Hero />
     
    </div>
  
  )

}

export default App;
