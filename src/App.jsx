import React from 'react'
import './App.css'
import Navbar from './Components/header/Navbar'
import Home from './Components/home/Home'
import About from './Components/about/About'
import Skills from './Components/skills/Skills'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      {/* <About/> */}
      <Skills/>
    </div>
  )
}

export default App