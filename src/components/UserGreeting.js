import React from 'react'
import { useState } from 'react'

export const UserGreeting = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
   <div>
         {isLoggedIn ? <div> Welcome As </div> : <div> Welcome Guest </div>}
    </div>
  )
}

export default UserGreeting
