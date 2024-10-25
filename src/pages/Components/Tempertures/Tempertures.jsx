import Variable from '../Variable/Variable';
import { useState,useEffect } from 'react';
import './Tempertures.css'

function Tempertures({initCelsius, name}) {

    const [celsius, setCelsius] = useState(initCelsius || 25);
    const [fahrenheit, setFahrenheit] = useState((initCelsius || 25) * 9/5 + 32);
    const [kelvin, setKelvin] = useState((initCelsius ||  25) + 273.15);

    // คำนวนใหม่เมื่อ celsius มีการเปลี่ยนแปลง
    useEffect(() => {
        setFahrenheit((celsius * 9/5) + 32)
        setKelvin(celsius + 273.15)
    }, [celsius])
    // คำนวนใหม่เมื่อ fahrenheit มีการเปลี่ยนแปลง
    useEffect(() => {
        setCelsius((fahrenheit - 32) * 5/9)
        setKelvin((fahrenheit - 32) * 5/9 + 273.15)
    }, [fahrenheit])
    // คำนวนใหม่เมื่อ kelvin มีการเปลี่ยนแปลง
    useEffect(() => {
        setCelsius(kelvin - 273.15)
        setFahrenheit((kelvin - 273.15) * 9/5 + 32)
    }, [kelvin])


    return ( 
        <div className='tempertures-container'>
            <h3 className='tempertures-title'>{name || 'Tempertures'}</h3>

            <h3 className='tempertures-display'>
                <span className='badge bg-primary'>{celsius.toFixed(2)} &deg;C</span> 
                <span className='badge bg-primary'>{fahrenheit.toFixed(2)} &deg;F</span> 
                <span className='badge bg-primary'>{kelvin.toFixed(2)} &deg;K</span>
            </h3>

            <div className="tempertures-variables">
                <Variable name={'Celsius'} value={celsius} setValue={setCelsius}/>
                <Variable name={'Fahrenheit'} value={fahrenheit} setValue={setFahrenheit}/>
                <Variable name={'Kelvin'} value={kelvin} setValue={setKelvin}/>
            </div>
        </div>
     );
}

export default Tempertures;