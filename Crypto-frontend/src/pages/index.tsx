import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ConverSection from '../components/ConverSection';
import Footer from '../components/Footer';
import Services from '../components/Services';
import LiveChatPage from '../components/LiveChat';
import MarketCap from '../components/MarketCap';
const Dashboard = () => {
    
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ConverSection />
      <MarketCap/>
      <LiveChatPage/>
      <Services />
      <Footer />
    </>
  );
};

export default Dashboard;
