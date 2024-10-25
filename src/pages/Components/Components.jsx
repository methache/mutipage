import React from 'react'
import './Components.css'

import Add from './Add/Add'
import Counter from './Counter/Counter'
import Tempertures from './Tempertures/Tempertures'
import Timer from './Timer/Timer'

function Components() {
  return (
    <div className='component-container rounded'>
      <div className='border border-2 border-dark p-2 componentcontainer'>
       

        <div className='container contain01 text-center'>
          <div className='contain02'>
            <Counter name={'John'} value={10}/>
            <Timer />
          </div>
          <div className='contain03 text-center'>
            <Add aValue={10} bValue={20}/>
          </div>
        </div>

        <div className='container text-center container04'>
          <Tempertures initCelsius={25} name={'Tempertures'}/>
        </div>

       
      </div>
    </div>
  )
}

export default Components