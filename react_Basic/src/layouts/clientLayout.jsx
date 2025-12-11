
import React from 'react'
import { NavBar } from '../components/nav'
import { Outlet } from 'react-router'

export const ClientLayout = () => {
  return (
    <div>
        {/* nav */}
        <NavBar />

        {/* dynamic content */}
        <Outlet />

        {/* footer */}

    </div>
  )
}
