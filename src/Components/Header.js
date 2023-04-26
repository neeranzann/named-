import React from 'react'
import { NavLink } from 'react-router-dom'

const Headers = () => {
  return (
    <div className='flex bg-black text-white px-9 justify-between py-2 items-center'>

      <h1 className='text-xl'>Logo</h1>

      <nav>
        <NavLink to='add' >Add Info</NavLink>
      </nav>

    </div>
  )
}

export default Headers