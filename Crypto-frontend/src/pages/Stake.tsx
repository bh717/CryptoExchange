import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer1';
import Sidebar from '../components/Sidebar';
import StakePage from '../components/Stake';
import LiveChatPage from '../components/LiveChat';
import FaqDescriptionPage from '../components/FaqDecription';
const Stake = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <StakePage/>
      <FaqDescriptionPage/>
      <LiveChatPage/>
      <Footer/>
    </>
  );
};

export default Stake;
