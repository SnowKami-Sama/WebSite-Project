import { useState, useEffect } from "react";
import rick from './img/rickroll.jpg'


const CurrentTime = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        let handle = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => { clearInterval(handle); }
    }, []);
    return (
        <div>
            <p>Date: <b>{date.toDateString()}</b></p>
            <p>time: <b>{date.toLocaleTimeString()}</b></p>
            </div>
    )
}

export default CurrentTime;