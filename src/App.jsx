import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login'
import Header from './CommonComponents/Header';
import ProductManagement from './CEO & HR/pages/ProductManagement';
import TimeSheet from './EMP/pages/TimeSheet';
<<<<<<< Updated upstream
import  Home  from './CEO & HR/pages/Home';
=======
import EventsHolidaysView from './EMP/pages/EventsHolidaysView';
>>>>>>> Stashed changes

function App() {
 

  return (
    <>
    <Header />
    <Routes>
      <Route path="/"  element={<Login/>} />
      {/* Employee routes */}
      <Route path="/timesheet"  element={<TimeSheet/>} />
      <Route path="/products"  element={<ProductManagement/>} />
      <Route path="/leaves"  element={<EventsHolidaysView/>} />

      
    


      
      {/* CEO or HR routes  */}
      <Route path="/home"  element={<Home/>} />

    </Routes>
    </>
  )
}

export default App
