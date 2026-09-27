import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Register from '../src/pages/Register.jsx'
import About from '../src/pages/About.jsx'
import Dashboard from '../src/pages/Dashboard.jsx'
import Home from '../src/pages/Home.jsx'
import NotFound from '../src/pages/NotFound.jsx' 
import Login from '../src/pages/Login.jsx' 
import MainLayout from '../src/layouts/MainLayout.jsx'
import ForgetPass from './pages/ForgetPass.jsx'
import MainContent from './pages/MainContent.jsx'
import Footer from './componants/Footer.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<MainContent/>}/>
      <Route  element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='forgetpass' element={<ForgetPass/>}/>
      <Route path='footer' element={<Footer/>}/>
      <Route path='*' element={<NotFound/>}/>
      
      </Route>
    </Routes>


    </>
  )
}

export default App
