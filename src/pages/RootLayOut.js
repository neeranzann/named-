import React from 'react'
import { Outlet } from 'react-router'
import Headers from '../Components/Header'

const RootLayOut = () => {


  return (
    <>
      <Headers/>

      <Outlet />

    </>
  )
}

export default RootLayOut