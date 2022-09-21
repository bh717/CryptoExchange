import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer1';
import Sidebar from '../components/Sidebar';
import LiveChatPage from '../components/LiveChat';
// import HomePage from "../components/"
import MarketPage from '../components/Market'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <MarketPage/>
      <LiveChatPage/>
      <Footer/>
    </>
  );
};

export default Home;
