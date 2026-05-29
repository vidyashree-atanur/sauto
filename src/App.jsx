import React from 'react'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App