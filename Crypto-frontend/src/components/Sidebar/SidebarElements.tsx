import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

import { SideBarProps } from './index';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props: SideBarProps) => (props.isOpen ? '100%' : '0')};
  top: ${(props: SideBarProps) => (props.isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-colums: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  margin-top:3px;
  margin-left:5px;
  justify-content: center;
`;
export const LanguageImage = styled.img`
  margin: 2px;
  cursor: pointer;
  opacity: .5;
`;
export const SidebarRoute = styled(LinkR)`
  border-radius: 20px;
  background: #0045ea;
  white-space: nowrap;
  padding: 10px 22px;
  margin-right:5px;
  font-family: 'DM Sans', sans-serif;
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
