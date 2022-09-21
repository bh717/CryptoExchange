import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const SelectBg= styled.select`
  margin-bottom: 10px;
  // margin-top: 10px;
  font-family: Roboto;
  outline: 0;
  margin-left:1rem;
  background: #12e322;
  color: #6a0808;
  border: 1px solid crimson;
  padding: 10px 22px;
  // width:18%;
  // height:100%;
  border-radius: 9px;

  // border-radius: 50px;
  // background: #01bf71;
  // white-space: nowrap;
  // padding: 10px 22px;
  // color: #010606;
  // font-size: 16px;
  // outline: none;
  // border: none;
  // cursor: pointer;
  // transition: all 0.2s ease-in-out;
  // text-decoration: none;
`; 
export const Nav = styled.nav`
  background: ${({ scrollNav }:any) => (scrollNav ? '#000' : 'transparent')};;
  height: 80px;
  // margin-top: -80px;
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

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const LogoImg = styled.img`
  width:30px;
  height:30px;
  margin-right:5px;
`;
export const LanguageImage = styled.img`
  margin: 2px;
  cursor: pointer;
  opacity: .5;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: 'Rye', serif;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Droid Sans', serif;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 20px;
  background: #0045ea;
  white-space: nowrap;
  padding: 10px 22px;
  margin-right:5px;
  font-family: 'Droid Sans', serif;
  color: #FCFCFD;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772FF;
  }
`;

export const NavBtnLink1 = styled(LinkR)`
  border-radius: 20px;
  box-shadow: 0 0 0 2px #353945 inset;
  background: #23262F;
  white-space: nowrap;
  padding: 10px 22px;
  margin-right:5px;
  font-family: 'Droid Sans', serif;
  color: #FCFCFD;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772FF;
  }
`;