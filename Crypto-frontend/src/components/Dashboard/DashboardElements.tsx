import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const CoverContainer = styled.div`
  position: relative;
  min-height:100%;
  background: #141416;
  margin-top:-16px;
`;
export const ACg= styled.a`
  font-size:3rem;
`;
export const ImgCg= styled.img`
  width:5%;
  height:3rem;
  margin-left:0.5rem; 
  margin-top:0.5rem;
  margin-bottom:0.5rem;
  margin-left:10%;
  position:relative;
  @media screen and (max-width: 480px) {
    height:1.5rem;
  }
  @media screen and (min-width:481px) and (max-width: 768px) {
    height:2rem;
  }
  @media screen and (min-width:769px) and (max-width:1024px) {
    height:2.5rem;
  }
  @media screen and (min-width:1025px) and (max-width:1500px) {
    height:3rem;
  } 
`;
export const LabelBg = styled.label`
  position:relative;
  // margin-left:10%;
  font-size:30px;
  font-family: 'Droid Sans', serif;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size:15px;
  }
  @media screen and (min-width:481px) and (max-width: 768px) {
    font-size:15px;
  }
  @media screen and (min-width:769px) and (max-width:1024px) {
    font-size:20px;
  }
  @media screen and (min-width:1025px) and (max-width:1500px) {
    font-size:30px;
  } 
`;
export const VirgocxDiv = styled.div`
  width:100%;
  height:6%;
  display:flex;
  margin-top:1.5rem;
  align-items:center;
  justify-content:space-between;
  // @media screen and (max-width: 480px) {
  //   height:15px;
  // }
  // @media screen and (min-width:481px) and (max-width: 768px) {
  //   height:20px;
  // }
  // @media screen and (min-width:769px) and (max-width:1024px) {
  //   height:25px;
  // }
  // @media screen and (min-width:1025px) and (max-width:1500px) {
  //   height:30px;
  // } 
`;
export const DashFavourite = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (1025px<=width) {
    height: 1100px;
  }
  @media screen and (769px<=width<= 1024px) {
    height: 900px;
  }
  @media screen and (481px<=width<= 768px) {
    height: 700px;
  }
  @media screen and (0<=width<= 480px) {
    height: 500px;
  }
 
`;
export const DashboardBody= styled.div`
  justify-content: space-between;
  // height:100%;
  margin: 0px auto 0 auto;
  padding:0 0px;
`;
export const LineHR= styled.hr`
  width:100%;
  text-align:left;
  margin-left:0;
  border-width:2;
  color:white;
  background-color:white;
  height:1rem;
`;
export const ServicesWrapper = styled.div`
  // height:40vh;
  margin: 0 auto;
  display: grid;
  margin-top:1rem;
  grid-template-columns: 1.5fr 1.5fr 1.5fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #1c1c1e;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  margin-right:5rem;
  margin-left:5rem;
  margin-top:1rem;
  max-height: 300px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  padding: 10,30px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #FFF;
  font-family: 'DM Sans', sans-serif;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const DashboardSpan = styled.span`
  font-size:3rem;
`;

export const DashboardOrder = styled.a`
  font-size:2.5rem;
  cursor:pointer;
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  position:relative;
  // margin-left:20rem;
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #0596eb;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  margin-right:1rem;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;