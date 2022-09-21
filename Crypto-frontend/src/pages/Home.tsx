import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer1';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard'
import LiveChatPage from '../components/LiveChat';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Dashboard/>
      <LiveChatPage/>
      <Footer/>
    </>
  );
};

export default Home;
