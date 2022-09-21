import styled from 'styled-components';

export const Styles= styled.div`
  padding:1rem;
  height:80vh;
  background: #141416 ;
  align-items:center;
  table{
    width: 100%;
    height:70vh;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(235,235, 235) 0px 0px 0px 1px;
    border-radius: 20px;
    border-style: hidden;
    tr{
      :last-child{
        td{
          border-bottom:0;
        }
      }
    }
    th{
      font-size: 1em;
      font-weight: 500;
      user-select: none;
      padding: 20px 10px;
      border-bottom: 3px solid rgb(242, 244, 255);
    }
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    height: 1100px;
  }

  @media screen and (min-width:480px) and (max-width: 768px) {
    height: 700px;
  } 

  @media screen and (min-width: 768px) and (max-width:1024px){
    height: 1000px;
  }
  @media screen and (min-width: 1023px)and (max-width:1280px){
    height: 1100px;
  }
  @media screen and (min-width: 1280px){  
    height: 1200px;
  }
`;
export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (min-width: 0px) and (max-width: 480px) {
    height: 2000px;
  }

  @media screen and (min-width:480px) and (max-width: 768px) {
    height: 500px;
  } 

  @media screen and (min-width: 768px) and (max-width:1024px){
    height: 800px;
  }
  @media screen and (min-width: 1024px)and (max-width:1280px){
    height: 800px;
  }
  @media screen and (min-width: 1280px){
    height: 800px;
  }

  
`;

export const ServicesH2 = styled.h2`
  font-size: 4rem;
  margin-bottom: 10px;
  color: black;
  font-family: 'Droid Sans', serif;
`;
export const TopicDiv = styled.div`
  display:flex;
  justify-content: center;
  margin-bottom:5px;
`;
export const ButtonDiv = styled.div`
  display:flex;
  justify-content: center;
  border:none;
`;
export const ButtonStyle = styled.button`
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