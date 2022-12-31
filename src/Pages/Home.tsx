import React from 'react';
import Random from './ProjectsList/RandomImg';
import Slots from "./ProjectsList/Slot";
import Todo from "./ProjectsList/todolist"
import styles from "./app.module.css"
import News from "./ProjectsList/newsApi"
import axios from "axios";
import time from './ProjectsList/TimeDate'


const Home = () => {
    
    return (
        <div>
           <br />
            <div className={styles.homes}>
            <h1>Alexandre De Paula</h1>
                <p>Portfolio voor Web Frameworks</p>
            </div>
            <br />
            <div className={styles.homes}>
            <p>{Random()}</p>
            </div>
            <br />
            <div className={styles.homes}>
            <p>{Todo()}</p>
            </div>
            <br />
            <div className={styles.homes}>
            <News category="technology"  pageSize={3} />
            <p>{time()}</p>
            </div>
        </div>
    );
}
  
  export default Home;





  