import styled from 'styled-components';

export const ImgBg = styled.img`
  width:30px;
  height:30px;
`;
export const HrBg = styled.hr`
  width:100%;
  color:white;
  height:2px;
`;
export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (min-width: 0px) and (max-width: 480px) {
    height: 500px;
  }

  @media screen and (min-width:480px) and (max-width: 768px) {
    height: 900px;
  } 

  @media screen and (min-width: 768px) and (max-width:1024px){
    height: 1000px;
  }
  @media screen and (min-width: 1024px)and (max-width:1280px){
    height: 1100px;
  }
  @media screen and (min-width: 1280px){
    height: 1200px;
  }

  
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  font-family: 'Droid Sans', serif;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom:32px;
  }
  @media screen and (max-width: 960px) {
    font-size: 2rem;
    margin-bottom:10px;
  }
  
`;
export const Marketp=styled.p`
margin-right:30px;
color:white;
`;
export const TitleDiv= styled.div`
  display:flex;
  align-items:left;
`;
export const ServicesH2 = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  width:100px;
  color: white;
  font-family: 'Droid Sans', serif;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: white;
  font-family: 'Droid Sans', serif;
`;
