import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Link as LinkR } from 'react-router-dom';

export const CoverContainer = styled.div`
  background: #0045ea;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 90vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const CoverBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const CoverContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (0px<= width<= 420px) {
    max-width:420px;
  }
  @media screen and (421px<= width<= 768px) {
    max-width:768px;
  }
  @media screen and (768<= width<=1024px) {
    max-width:1024px;
  }
`;

export const CoverH1 = styled.h1`
  color: #fff;
  font-size: 68px;
  text-align: center;
  font-family: 'Permanent Marker';
  // font-family: 'Rubik Moonrocks', serif;
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const CoverP = styled.p`
  margin-top: 24px;
  
  font-family: 'Inconsolata', serif;
  color: #fff;
  font-size: 44px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const CoverBtnWrapper = styled.div`
  margin-top: 42px;
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ChatDiv=styled.div`
  left:10px;
  top:20%;
`;
export const LanguageDiv = styled.div`
    position: fixed;
    left: 10px;
    top: 20%;
    transform: translateY(-50%);
    z-index: 999;
    display: flex;
    flex-direction: column;
`;
export const LanguageImage = styled.img`
  margin: 2px;
  cursor: pointer;
  opacity: .5;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 24px;
  box-shadow: 0 0 0 2px #353945 inset;
  background: #3772FF;
  white-space: nowrap;
  padding: 10px 22px;
  margin-right:5px;
  font-family:Roboto;
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