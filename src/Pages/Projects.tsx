import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink , Link} from "react-router-dom";
import Pokemon from "./ProjectsList/Pokemon";
import Project2 from "./ProjectsList/Project2";
import Slots from "./ProjectsList/Slot";
import CurrentTime from "./ProjectsList/TimeDate";
import Slots2 from "./ProjectsList/slotsv2";
import styles from "./app.module.css"


const Projects = () => {
    return (
        <div>
            <p className={styles.project}>{Project2()}</p>
            <br />
            <p className={styles.project}>{Slots2()}</p>
            <br />     
            <p className={styles.project}><h1>Project 3 : Time & Date</h1>{CurrentTime()}</p>
            <br />     
            <p className={styles.project}>{Pokemon()}</p>
            <br />
        </div>
        
    );
}
  
  export default Projects;
