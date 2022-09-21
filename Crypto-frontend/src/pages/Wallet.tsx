import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer1';
import Sidebar from '../components/Sidebar';
import WalletPage from '../components/Wallet';
import LiveChatPage from '../components/LiveChat';
const Wallet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <WalletPage/>
      <LiveChatPage/>
      <Footer/>
    </>
  );
};

export default Wallet;
