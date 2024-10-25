import './Counter.css'
import { useState } from 'react';

function Counter(props) {
    // let value = props.value
    const [value,setValue] = useState(props.value  || 0)

    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        setValue(value - 1)
    }
    return ( 
        <div className='counter-container'>
            <h3 className='counter-title'>{props.name || 'Counter'}</h3>

            <button className='btn btn-danger' onClick={decrement}>-</button>
            <span className='counter-value'>{value}</span>
            <button className='btn btn-success' onClick={increment}>+</button>
        </div>
     );
}

export default Counter;