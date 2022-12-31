import { getRoles } from '@testing-library/react';
import React, { useState } from 'react';
import styles from "./app.module.css"
import cherry from './Pictures/slot-cherry.png'; 
import lemon from './Pictures/slot-lemon.png'; 
import melon from './Pictures/slot-melon.png'; 
import prune from './Pictures/slot-prune.png';
import seven from './Pictures/slot-seven.png'; 

let slotImages = [cherry,lemon,melon,prune,seven]

const Number_Of_Slots = 5;

const getRandomSlots = (numberOfSlots: number) => {
    let slots: number[] = [];
    for (let i = 0; i< numberOfSlots; i++) {
        slots.push(Math.floor(Math.random()*5));
    }
    return slots;
}

interface SlotProps {
    value :  number
}

const Slots = ({value}: SlotProps) => {
    return <img src={slotImages[value]} alt="slot" width="100" className={styles.slot}/>
}

interface SlotmachineProps {
    slots: number
}

const Slotmachine = ({slots: amountOfSlots} : SlotmachineProps) => {

    const [slots,setSlots] = useState<number[]>(getRandomSlots(amountOfSlots))
    const [money,setMoney] = useState<number>(100);

    const isWinning = (slots: number[]) => {
        return slots.every((slot) => slot === slots[0]);
    }


    const pullLever = () => {
       let randomSlots: number[] = getRandomSlots(amountOfSlots);
        setSlots(randomSlots);
        if (isWinning(randomSlots)) {
            setMoney (money => money + 10)
        } else {
            setMoney(money => money - 1)
        }
    }

    return (
        
        <div>
            {money > 0 && <>Saldo: ${money}</>}
            {money == 0 && <>Je bent bankrupt</>}
            <div>
             {slots.map((slot,index) => (
                <Slots value={slot} key={index}/>
              ))}
            </div>
            <button className={styles.lever} onClick={pullLever} disabled={money == 0 ? true : false}>Pull Lever</button>
        </div>
            
    )
}

const Slotv2 = () => {


    return(
      <div>
         <h1>Project 2 : Slot Machine</h1>

        <Slotmachine slots={3}/>

      </div>
    )
}

export default Slotv2;