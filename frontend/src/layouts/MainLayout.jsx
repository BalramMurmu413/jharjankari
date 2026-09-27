import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../componants/Footer.jsx'
import Navbar from '../componants/Navbar'


export default function MainLayout() {
  return (
    <>
    <Navbar/>
  <main className="w-full py-6">
        < Outlet />
      </main>
    <Footer/>

    
    </>
  )
}
