import React, {useEffect,useState} from 'react';
import { IconContext } from 'react-icons/lib';
import i18next from "i18next";

import {useTranslation} from 'react-i18next';

import { FaBars } from 'react-icons/fa';
//@ts-ignore
import ReactFlagsSelect from "react-flags-select";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import data from './NavbarText.json';
// import {useHistory} from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import {  LogoImg, NavBtnLink1, NavBtn, MenuIcon, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu,NavBtnLink} from './NavbarElements';
// import styled from 'styled-components';
import './style.css';
import logoimg from  '../../image/logo.svg';

const Navbar = ({ toggle}:any) => {

    const [showBtn, setshowBtn] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [selected, setSelected] = useState("GB");

    const navigate = useNavigate ();
    // const history = useHistory();
    const { t } = useTranslation(['navbar']);
    useEffect(() => {
      if(selected === "GB") {
        i18next.changeLanguage('en');
      } else if(selected === 'CN') {
        i18next.changeLanguage('ts');
      }
    }, [selected]);
    // useEffect(()=>{

    // },[showBtn])
    const Nav = styled.nav`
      background:#000;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      position: sticky;
      top: 0;
      z-index: 10;
    
      @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
      }
    `;

    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', changeNav);
    }, []);
    const toggleHome = () => {
      scroll.scrollToTop();
    };

    useEffect(()=>{
      if(localStorage.getItem('user'))
      {
        console.log('user');
        setshowBtn(true);
      }
    });
    
    const deleteUser = () =>
    {
      localStorage.removeItem('user');
      navigate('/');
    }
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <Nav>
            <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}>
                <LogoImg src={logoimg}/>
                BXO Pro
              </NavLogo>
            
              <MenuIcon onClick={toggle}>
                <FaBars />
              </MenuIcon>
              <NavMenu>
                <NavItem>
                  <NavLink to='/Home'>{t('menu_name_1')}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/Market'>{t('menu_name_2')}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/trade'>{t('menu_name_3')}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/Stake'>{t('menu_name_4')}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/Wallet'>{t('menu_name_5')}</NavLink>
                </NavItem>
              </NavMenu>
              <NavBtn>
              {showBtn===false &&(
                <>
                <NavBtnLink to="/signup" >{t('Sign Up')}</NavBtnLink>
                <NavBtnLink1 to="/login" >{t('Log In')}</NavBtnLink1></>
               )}
               { showBtn ===true &&(
                <>
                  <NavBtnLink to="/" onClick={deleteUser} >{t("Log Out")}</NavBtnLink>
                </>
              )} 
              <ReactFlagsSelect
                  selected={selected}
                  onSelect={setSelected}
                  countries={["GB", "CN"]}
                  showSelectedLabel={false}
                  showOptionLabel={false}
                  fullWidth={false}      
                />;
                
              </NavBtn>
              
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
  };

export default Navbar;
