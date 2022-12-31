import { useState } from "react";
import rick from './img/rickroll.jpg'


const Project2 = () => {
    
        const [divVisability, setDivVisability] = useState(false);
        const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setDivVisability(event.target.checked);
        }
        return <>
            <div>
            <h1>Project 1: Rickrolled</h1>
            <input type="checkbox" onChange={handleChange} />Show/Hide
            {divVisability ? <div><img style={{width:"100", height:"100"}} src={rick} alt="RickRolled" /></div> : null }
            </div>
        </>
  };

export default Project2;