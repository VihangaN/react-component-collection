import React from 'react'
import { useState } from 'react'

export default function ToggleSwitch() {

    const [on , setOn] = useState(false);
  return (
    <div className="toggle-base" onClick={()=> setOn(!on)}>
        <div className={`knob ${on && 'on'}`}></div>
    </div>
  )
}
