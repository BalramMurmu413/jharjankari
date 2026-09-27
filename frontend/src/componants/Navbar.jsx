import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <nav className='w-full flex justify-around'>
    <Link to='/'>Home</Link>  
    <Link to='/about'>About</Link>  
    <Link to='/register'>Register</Link>  
    <Link to='/login'>login</Link>  
    <Link to='/dashboard' className=''>Dashboard</Link>  
    </nav>  
    </>
  )
}
