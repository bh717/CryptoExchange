import React,{ useState,useEffect } from 'react';

import background_img from '../../image/background.jpg';
// import background_video from '../../video/video.mp4';

import 'bootstrap/dist/css/bootstrap.css';
import {useTranslation} from 'react-i18next';

import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './ConverStyle.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from '../ButtonElements';

import { ChatDiv, NavBtnLink, CoverContainer, CoverBg,  ImgBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight } from './converElements';

const CoverSection = () => {
  const [hover, setHover] = useState(false);
  const { t } = useTranslation(['conversection']);
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = ({newMessage}:any) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  const onHover = () => {
    setHover(!hover);
  };
  
  return (
    <CoverContainer>
      {/* <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="My new awesome title"
        subtitle="And my cool subtitle"
      /> */}
      <CoverBg>
      <ImgBg src={background_img}/>
      </CoverBg>
      <CoverContent>
        <CoverH1>{t('Trade like a Pro')}</CoverH1>
        <CoverP>{t("Professional crypto exchange")}</CoverP>
        <CoverBtnWrapper>
          <NavBtnLink to="/login">{t("Get started now")}</NavBtnLink>
        </CoverBtnWrapper>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
