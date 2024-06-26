import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login'
import Header from './CommonComponents/Header';
import ProductManagement from './EMP/pages/ProductManagement';
import TimeSheet from './EMP/pages/TimeSheet';

function App() {
 

  return (
    <>
    <Header />
    <Routes>
      <Route path="/"  element={<Login/>} />
      {/* Employee routes */}
      <Route path="/timesheet"  element={<TimeSheet/>} />
      <Route path="/products"  element={<ProductManagement/>} />


      
      {/* CEO or HR routes  */}


    </Routes>
    </>
  )
}

export default App
