import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import Header from './components/Header';
import ProductManagement from './pages/ProductManagement';
import TimeSheet from './components/TimeSheet';

function App() {
 

  return (
    <>
    <Header />
    <Routes>
      <Route path="/"  element={<Login/>} />
      <Route path="/timesheet"  element={<TimeSheet/>} />
      <Route path="/products"  element={<ProductManagement/>} />
      {/* Add routes for other components like Dashboard here */}
    </Routes>
    </>
  )
}

export default App
