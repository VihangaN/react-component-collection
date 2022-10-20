import React, { useState } from 'react'

const Counter = ({ color = 'black', step = 1}) => {

  const [value, setValue] = useState(0);  

  const up = () => setValue(value+step);

  const down = () => {
    if(value !== 0) {
        setValue(value-step)
    }
  }

  return (
    <div className="counter">
        <button onClick={() => down()}>-</button>
        <span className={`${color}`}>{value}</span>
        <button onClick={() => up()}>+</button>
    </div>
  )
}

const CounterComponent = () => {
    return (
        <div>
            <p>Colours</p>
            <Counter color="red"/>
            <Counter color="black"/>

            <p>Steps</p>
            <Counter color="black" step={1}/>
            <Counter color="red" step={2}/>
            <Counter color="black" step={3}/>
        </div>
    )
}

export default CounterComponent;