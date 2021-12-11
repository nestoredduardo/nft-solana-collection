import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
