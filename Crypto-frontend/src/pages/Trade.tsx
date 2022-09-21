import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer1';
import Sidebar from '../components/Sidebar';
import LiveChatPage from '../components/LiveChat';

import TradePage from '../components/Trade';
const Trade = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <TradePage/>
        <LiveChatPage/>
        <Footer/>
      </>
    );
  };
  
  export default Trade;
  