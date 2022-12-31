import { useState } from "react";
import rick from './img/rickroll.jpg'


interface Coordinates {
    x: number,
    y: number
  }
  
  const Random = () => {
    //const [coordinates, setCoordinates] = useState<Coordinates>({x: 0, y: 0})
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
  
  const setRandom = () =>  {
    let y = Math.floor(Math.random() * window.innerHeight);
    let x = Math.floor(Math.random() * window.innerWidth);
  
  
    //setCoordinates({x,y});
    setX(x);
    setY(y);
  };
  
    return(
     <>
     <button onClick={setRandom}>Don't Click Me</button>
     {(x !== 0 && y !== 0 && (
         <img src={rick} style={{position: "fixed", top: x, left: y}} />
     ))}
     </>
  
    )
  }
  export default Random;