import './Timer.css'
import { useState,useEffect } from 'react';

function Timer() {
    const [running,setRunning] = useState(false)
    const [seconds,setSeconds] = useState(1900)

    useEffect(() => {
        let interval = null
        if(running){
           interval = setInterval(()=>{
            setSeconds(seconds => seconds + 1)
           },1000)
        }
        return () => clearInterval(interval)
    },[running,seconds])

    const runClick = () => {
        setRunning(!running)
    }
    const resetClick = () => {
        setRunning(false)
        setSeconds(0)
    }
    const secondsToString = (seconds) => {
        const minute_seconds = 60
        const hour_seconds = minute_seconds * 60
        const day_seconds = hour_seconds * 24

        const days = Math.floor(seconds / day_seconds)
        const hours = Math.floor((seconds % day_seconds) / hour_seconds)
        const minutes = Math.floor((seconds % hour_seconds) / minute_seconds)
        const secs = Math.floor(seconds % minute_seconds)

        if(days > 0){
            return `${days}d ${hours}h ${minutes}m ${secs}s`
        }else if(hours > 0){
            return `${hours}h ${minutes}m ${secs}s`
        }else if(minutes > 0){
            return `${minutes}m ${secs}s`
        }else{
            return `${secs}s`
        }
    }
    return ( 
        <div className='timer-container'>

            <h3 className='timer-title'>Timer</h3>
            <p><input className='timer-display' type="text" readOnly={true} value={secondsToString(seconds)}/></p>

            <div className='timer-buttons'>
                <button className='btn btn-danger' onClick={resetClick}>Reset</button>
                <button className={'btn ' + (running ? 'btn-warning' : 'btn-success')} onClick={runClick}>{running ? 'Pause' : 'Run'}</button>
            </div>
        </div>
     );
}

export default Timer;