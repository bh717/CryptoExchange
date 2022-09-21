import React,{ useState,useEffect } from 'react';

import background_img from '../../image/background.jpg';
// import background_video from '../../video/video.mp4';

import 'bootstrap/dist/css/bootstrap.css';

import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const LiveChatPage = () => {
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const getCustomLauncher = ({handleToggle}:any) =>
    <button onClick={handleToggle}>This is my launcher component!</button>
  const handleNewUserMessage = ({newMessage}:any) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  
  return (
    <Widget
      title="BXO Pro Live Chat"
      // launcher={handleToggle => getCustomLauncher(handleToggle)}
    />
  );
};

export default LiveChatPage;
