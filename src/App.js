import React from 'react';
import {BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Report from './pages/Report';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={ <Home/> }/>
          <Route path='/products' element={ <Products/> }/>
          <Route path='/report' element={ <Report/> }/>          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
