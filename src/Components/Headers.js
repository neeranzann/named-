import React from 'react'
import { NavLink } from 'react-router-dom'

const Headers = () => {
  return (
    <div className='flex bg-black text-white px-9 justify-between py-2 item-center'>
      <NavLink to='/' className='text-xl'>Logo</NavLink>

<nav>
  <NavLink to='add' >Add Info</NavLink>
</nav>

</div>

    
  )
}

export default Headers
