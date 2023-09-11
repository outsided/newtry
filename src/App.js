import styles from "./app.module.css";
import Header from "./components/Header";
import Content from "./components/Content"
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <img className={styles.bollpurple} src="images/purple ball.png" alt="ball"></img>
    <img className={styles.bollred} src="images/red ball.png" alt="ball"></img>
    <img className={styles.smallball} src="images/small ball.png" alt="ball"></img>
    <div className={styles.purplelight}></div>
    <div className={styles.brownlight}></div>
      <div className={styles.app}>
      <Header />
      </div>
      <div>
      <Content/>
      </div>
      <div>
      <Footer/>
      </div>
    </>
    
  );
}

export default App;
