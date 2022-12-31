import styles from "./app.module.css"
import React from 'react';

const About = () => {
    return (
       <div>
        <br />
         <div className={styles.homes}>
                <h2>Summary</h2>
                <p>My Name is De Paula "Kami" Alexandre, Back-end all-round developer with some serious css issues and a passionate hate for grid and flex.</p>
                <p>And as a programmer I strive for things that's gonna help you and or facilitate your life in some way or another. </p>
                <p>I'm very keen to learn and improve, and open to feed back.</p>
                <p>Long Live The Galactic Federation!</p>
            </div>
            <br />
            <div className={styles.homes}>
                 <h2>My Skills</h2>
                 <p>C# <progress style={{}} value="5" max="10"></progress></p>
                 <p>JavaScript <progress style={{}} value="4" max="10"></progress></p>
                 <p>TypeScript <progress style={{}} value="6" max="10"></progress></p>
                 <p>Lua <progress style={{}} value="3" max="10"></progress></p>
                 <p>HTML & CSS <progress style={{}} value="6" max="10"></progress></p>
                 <p>MySQL <progress style={{}} value="8" max="10"></progress></p>
            </div>
            <br />
            <br />
            <div className={styles.homes}>
                <h2>Contact</h2>
                <form>
                <label>Name</label>
                <br />
                <input type="text" name="user_name" />
                <br />
                <label>Email</label>
                <br />
                <input type="email" name="user_email" />
                <br />
                <label>Message</label>
                <br />
                <textarea name="message" />
                <br />
                <input type="submit" value="Send" />
    </form>
            </div>
            <br />
            <br />
       </div>
    );
}
  
  export default About;