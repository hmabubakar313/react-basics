
import React from 'react'
import {useState} from 'react'

export const Message = () => {
    const [state, setstate] = useState('Welcome Visitor')
    
  return (
    <div>
        <h1> {state} </h1>
        <button onClick={()=>setstate('Thank you for subscribing')}> Subscribe</button>
        <br/>
        <button onClick={()=>setstate('Welcome Visitor')}> Unsubscribe</button>
    </div>
  )
}

