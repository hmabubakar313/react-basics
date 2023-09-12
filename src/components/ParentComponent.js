import React from 'react'
import { ChildComponent } from './ChildComponent'
import {useState} from 'react'

export const ParentComponent = () => {
    const [parentName, setParentName] = useState('Parent')
    const greetParent = (childName) => {
        alert(`Hello ${parentName} from ${childName}`)
    }
 
    greetParent('child')
    


  return (
    <div>
        <ChildComponent greetHandler={greetParent}/>
    </div>
  )
}
