import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import MaskText from './components/MaskText'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/app' element={<MaskText/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
