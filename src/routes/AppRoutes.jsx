import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import ContactsPage from '../pages/ContactsPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  )
}

export default AppRoutes