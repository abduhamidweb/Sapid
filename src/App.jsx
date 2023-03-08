import './App.scss'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import context from './Context/Context'
import Home from "./pages/Home";
function App() {
  return (
    <>
      {/* {
        checkLogin ?alert(1) : navigation("/login")
    } */}
      <Home />
    </>
  )
}

export default App
