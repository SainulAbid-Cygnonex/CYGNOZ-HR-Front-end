import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import Header from './components/Header';
import ProductManagement from './pages/ProductManagement';

function App() {
 

  return (
    <>
    <Header />
    <Routes>
      <Route path="/"  element={<Login/>} />
      <Route path="/products"  element={<ProductManagement/>} />
      {/* Add routes for other components like Dashboard here */}
    </Routes>
    </>
  )
}

export default App
