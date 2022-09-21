import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const ImgCg= styled.img`
  width:80%;
  height:80%;
  margin-left:0.5rem;
  margin-top:0.5rem;
  margin-bottom:0.5rem;
  margin-left:10%;
  position:relative;
`;
export const Styles= styled.div`
  padding:1rem;
  min-height:84vh;
  // display:flex;
  background:#141416;
  // border-radius: 25px;
  border-style: hidden;
  // border: 5px solid rgb(242, 244, 255);
  
`;
export const DescriptionDiv = styled.div`
  // padding:0,10px;
  width:70%;
  height:30%;
  align-items:left;
  @media screen and (max-width: 480px) {
    width:100%;
  }
`;
export const ButtonDiv = styled.div`
  // padding:0,10px;
  width:30%;
  height:30%;
  display:flex;
  position: relative;
  justify-content:right;
  @media screen and (max-width: 480px) {
    width:100%;
  }
`;
export const ServicesH2 = styled.h2`
  font-size:2rem;
  color:white;
  font-family: 'Droid Sans', serif;
`;
export const ServicesIConH2 = styled.h2`
  font-size:2rem;
  color:black;
  font-family: 'Droid Sans', serif;
`;

export const FirstDiv = styled.div`
  // padding:1rem;
  width:100%;
  height:50%;
  display:fixed;
  align-items:right;
  @media screen and (max-width: 480px) {
    display:initial;
  }
`;
export const SecondDiv = styled.div`
  // padding:1rem;
  width:100%;
  height:50%;
  display:initial;
  @media screen and (max-width: 480px) {
    display:initial;
  }
`;
export const FaqButton =styled(LinkS)`
  border-radius: 8px;
  width: 120px;
  height:50px;
  justify-content: center;
  align-items: center;
  border:1px solid rgba(0, 0, 0, 0.23);
  box-shadow: 0 0 0 2px #353945 inset;
  border-color:#F1F2FF;
  background-color: #FFF;
  white-space: nowrap;
  padding: 3px 15px;
  font-family: 'Droid Sans', serif;
  color: #FCFCFD;
  font-size: 16px;
  outline: none;
  border: none;
  display:flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #404960;
  }
`;
export const HeadText= styled.h1`
  font-size:4rem;
  // font-family:'Rancho';
  color:white;
  @media screen and (max-width: 480px) {
    font-size:3rem;
  }

`;
export const BodyText= styled.span`
  font-size:2rem;
  color:#8F8F8F;
  margin-top:10px;
  @media screen and (max-width: 480px) {
    font-size:1rem;
  }
`;
export const HowDiv = styled.div`
  padding:1rem;
  width:100%;
  height:50%;
  align-items:left;
  border-radius: 25px;
  border-style: hidden;
  border: 0.5rem solid rgb(242, 244, 255);
  @media screen and (max-width: 480px) {
    width:100%;
  }
`;
export const PictureDiv= styled.div`
  // padding:1rem;
  width:50%;
  height:50%;
  align-items:center;
  @media screen and (max-width: 480px) {
    width:100%;
  }
`;
export const StakingSpan =  styled.span`
  color: #0A0952;
  font-size: 14px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: black;
  font-family: 'Droid Sans', serif;
`;

export const ServicesIcon = styled.img`
  height: 70px;
  width: 70px;
  margin-bottom: 10px;
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  justify-content: center;
  display: flex;
`;
export const SymbolDiv = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
`;
export const ServicesCard = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  max-height: 300px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 25px;
  border-style: hidden;
  border: 3px solid rgb(242, 244, 255);
  
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const AssetButton= styled.div`
  width:30px;
  margin-right:2px;
  align-items:center;
  border-radius: 10px;
  border-style: hidden;
  border: 3px solid rgb(237, 238, 243);
`;

export const AssetTextDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
`;

export const AssetButtonDiv = styled.div`
  display:flex;
  align-items:center;
  margin-left:2rem;
`;
export const StakeButton=styled.div`
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
  text-align: center;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772FF;
  }
`;