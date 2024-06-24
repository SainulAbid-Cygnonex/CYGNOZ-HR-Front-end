import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import Header from './components/Header';

function App() {
 

  return (
    <>
    <Header />
    <Routes>
      <Route path="/"  element={<Login/>} />
      {/* Add routes for other components like Dashboard here */}
    </Routes>
    </>
  )
}

export default App
