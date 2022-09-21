import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages';
import Signup from './pages/SignUp';
import Login from './pages/logIn';
import Home from './pages/Home';
import Market from './pages/Market';
import Trade from './pages/Trade';
import Stake from './pages/Stake';
import Wallet from './pages/Wallet';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Market' element={<Market/>}/>
        <Route path='/trade' element={<Trade/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Stake' element={<Stake/>}/>
        <Route path='/Wallet' element={<Wallet/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
