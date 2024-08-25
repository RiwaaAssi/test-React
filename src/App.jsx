import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Employee from './Employee'
import Client from './Client'

function App() {
  return (
    <>
     <Navbar/>
     <Employee/>
     <Client/>
     <Footer/>

    </>
  )
}

export default App
