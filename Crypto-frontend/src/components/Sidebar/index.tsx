import React, { FC , useState, useEffect} from 'react';
import { LanguageImage, SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";
import EnImg from '../../image/lang/lang__en.png';
import ZhImg from '../../image/lang/lang__zh.png';
import i18next from "i18next"
import './style.css';
import {useTranslation} from 'react-i18next';
export interface SideBarProps {
    // any props that come into the component
    isOpen?: Boolean,
    toggle?: any,
}

const Sidebar : FC<SideBarProps> = ({isOpen, toggle}) => {
  const { t } = useTranslation(['navbar']);
  const [showBtn, setshowBtn] = useState(false);

  const englishLanguage = () =>{
    i18next.changeLanguage('en');
  }
  const chinaLanguage = () => {
    i18next.changeLanguage('ts');
  }
  const deleteUser = () =>
    {
      localStorage.removeItem('user');
      
    }
  
  useEffect(()=>{
    if(localStorage.getItem('user'))
    {
      console.log('user');
      setshowBtn(true);
    }
  });
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <div>
            <button onClick={englishLanguage}>
              <LanguageImage src={EnImg} alt="en" data-google-lang="en"/>
            </button>
            <button onClick={chinaLanguage}>
              <LanguageImage src={ZhImg} alt="en" data-google-lang="zh"/>
            </button>
          </div>
          <SidebarLink to="/" onClick={toggle}>{t("Home")}</SidebarLink>
          <SidebarLink to="/Home" onClick={toggle}>{t("menu_name_1")}</SidebarLink>
          <SidebarLink to="/Market" onClick={toggle}>{t("menu_name_2")}</SidebarLink>
          <SidebarLink to="/trade" onClick={toggle}>{t("menu_name_3")}</SidebarLink>
          <SidebarLink to="/Stake" onClick={toggle}>{t("menu_name_4")}</SidebarLink>
          <SidebarLink to="/Wallet" onClick={toggle}>{t("menu_name_5")}</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login" style={{display:showBtn === true ? "none":"block"}}>{t("Log In")}</SidebarRoute>
          <SidebarRoute to="/signup" style={{display:showBtn === true ? "none":"block"}}>{t("Sign Up")}</SidebarRoute>
          <SidebarRoute to="/" onClick={deleteUser} style={{display:showBtn === false ? "none":"block"}}>{t("Log Out")}</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
