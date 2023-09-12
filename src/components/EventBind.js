import React from 'react'
import {useState} from 'react'

export const EventBind = () => {
    const [message, setMessage] = useState('Hello')
  return (
    <div>
        <div>{message}</div>
        <button onClick={()=>setMessage('Goodbye')}> 
            Click
        </button>
    </div>
  )
}

export default EventBind
