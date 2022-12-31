import React, { useState } from 'react';
import cherry from './Pictures/slot-cherry.png'; 
import lemon from './Pictures/slot-lemon.png'; 
import melon from './Pictures/slot-melon.png'; 
import prune from './Pictures/slot-prune.png';
import seven from './Pictures/slot-seven.png'; 


let images : string[] = [cherry, lemon, melon, prune, seven];

interface SlotProps {
    state : number
}

interface SlotmachineProps {
    slots: number,
    function: Function,
    active: boolean,
    array: JSX.Element[]
}

const Slot = (props: SlotProps) => {
    return (
        <>
            <img src={images[props.state] } alt="slot_image" />
        </>
    );
}

const SlotMachine = (props: SlotmachineProps) => {
    let tmpArr = new Array(props.slots).fill(0).map((item, i) => <Slot key={i} state={Math.round(Math.random() * 4)} />);
    
    const load2 = () => {
        return props.array;
    }
  
    const checkArray = (array: JSX.Element[]) => {
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].props.state !== array[i + 1].props.state) {
                return false;
            }
        }
        return true;
    }
    return (
        <>
            <div className='slotmachine' style={{display:"flex " ,alignItems:"center",justifyContent:"center"}}>
            <p style={{fontFamily:"Georgia" ,fontSize:"50px" ,display:"flex ",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>{props.active ? checkArray(props.array) ? "Winner!!!" : "You lost." : "Press refresh to play."}</p>
                <figure style={{width:"100", height:"100"}}>
                    {
                        load2()
                    }
                </figure>
                <button style={{}} onClick={() => {
                    props.function((preVstate: any) => {
                        return { ...preVstate, active: preVstate.active = true, array: preVstate.array = tmpArr }
                    });
                }}>Refresh</button>
                <button onClick={() => {
                    props.function((preVstate: any) => {
                        return { ...preVstate, count: preVstate.count + 1, active: preVstate.active = false, array: preVstate.array = new Array(preVstate.count+1).fill(0).map((item, i) => <Slot key={i} state={0} />) }
                    });
                }}>+</button>
                <button onClick={() => {
                    props.function((preVstate: any) => {
                        return { ...preVstate, count: preVstate.count <= 2 ? preVstate.count = 2 : preVstate.count - 1, active: preVstate.active = false, array: preVstate.array = new Array(preVstate.count <= 2 ? preVstate.count = 2 : preVstate.count - 1).fill(0).map((item, i) => <Slot key={i} state={0} />) }
                    });
                }}>-</button>
            </div>
        </>
    );
}

const Slots = () => {
    const [machineOne, calculateSlotsMachineOne] = useState(() => {
        return { count: 3, active: false, array: new Array(4).fill(0).map((item, i) => <Slot key={i} state={0} />)};
    });
  
    return (
        <>
            <>
            <div style={{display:"flex ",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <h1>Project 2 : Slot Machine</h1>
                <div className="slotmachineFlex">
                    <SlotMachine array={machineOne.array} active={machineOne.active} key={1} slots={machineOne.count} function={calculateSlotsMachineOne} />
                </div>         
            </div>
            </>
        </>

    );
}


export default Slots;