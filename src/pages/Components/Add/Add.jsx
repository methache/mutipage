import { useState,useEffect } from "react";
import Variable from "../Variable/Variable";
import './Add.css'

function Add({aValue,bValue}) {
    const [a,setA] = useState(0)
    const [b,setB] = useState(0)

    useEffect(() => {
        setA(aValue || 0)
        setB(bValue || 0)
    },[aValue,bValue])

    return ( 
        <div className="add-container">
            <h3 className="add-title">Add</h3>
            <h2 className="add-display">
                <span className="badge bg-secondary">A={a}</span>
                <span className="badge bg-success">A+B={a+b}</span>
                <span className="badge bg-secondary">B={b}</span>
            </h2>
            <div className="add-variables">
                <Variable type={'int'} name={'A'} value={a} setValue={setA}/>
                <Variable type={'int'} name={'B'} value={b} setValue={setB}/>
            </div>
        </div>
     );
}

export default Add;