import React from 'react'
import Topnavig from './Components/Navbar1'
import { Outlet } from 'react-router-dom'
export const Landing = () => {
  return (
    <>
      <Topnavig/>
      <div className='flex flex-col'>
      <div className='back1'>
        <Outlet/>
      </div>
      </div>
    </>
  )
}
export default Landing
