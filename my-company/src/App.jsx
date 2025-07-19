import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Navbar from './Navbar'

function App() {

  return (
	  <BrowserRouter>
	  <Navbar />
	  <Routes>
	  <Route path="/" element={<Home />} />
	  <Route path="/about" element={<About />} />
	  <Route path="services" element={<Services />} />
	  <Route path="contact" element={<Contact />} />
	  </Routes>
	  </BrowserRouter>

  )
}

export default App
