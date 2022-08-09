import styles from "./styles/topBar.module.scss";
import { TopBar } from "./components/TopBar/TopBar";
import { BrowserRouter as Router} from "react-router-dom";
import { Main } from "./components/MainSection/Main";
import {Footer} from './components/Footer';

function App() {
    return (
        
        <div className={styles.mainContainer}>
            <Router>
                <TopBar />
            </Router>
            <Main />
          <Footer/>
        </div>
     
    );
}

export default App;
