import React from 'react'
import {useState} from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count : {count}</button>

    </div>
  )
}
