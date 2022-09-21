import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: white;
  font-family: 'Droid Sans', serif;
`;
export const ServicesH2 = styled.p`
  font-size: 2rem;
  // margin-top:40px;
  // margin-bottom: 10px;
  width:100%;
  color: white;
  font-family: 'Droid Sans', serif;
`;
export const Optiondiv=styled.div`
background-color:#141416;
`;

export const TradeDiv = styled.div`
  min-height:84vh;
  align-items:center;
  display:flex;
  border-style: hidden;
  background-color:#141416;
  border: 0px solid rgb(242, 244, 255);
  @media screen and (max-width: 460px) {
    display:initial;
    background-color:#141416;
  }
`;
export const SelectBg= styled.select`
  margin-bottom: 10px;
  // margin-top: 10px;
  font-family: cursive, sans-serif;
  outline: 0;
  margin-left:1rem;
  background: #12e322;
  color: #6a0808;
  border: 1px solid crimson;
  padding: 4px;
  width:18%;
  height:100%;
  border-radius: 9px;
`; 
export const InputBg = styled.input`
  color: #1E2329;
  font-size: 14px;
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 12px;
  width:80%;
`;

export const FromInput=styled.input`
  type:number;
  color:#1E2329;
  font-size:14px;
  height:1rem;
  width:100%;
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
  text-align:center;
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
export const FromDiv= styled.div`
  display:initial;
  width:100%;
  height:100%;
  background:#141416;
  margin-top:10px;
  padding-top:1rem;
`;
export const ButtonDiv= styled.div`
  display:flex;
  background:#141416;
  margin-top:1rem;
  width:100%;
  height:8%;
  align-item:center;
  display: flex;
  flex-direction: column;
`;
export const ToDiv= styled.div`
  display:flex;
  background:#141416;
  margin-top:1rem;
  width:100%;
  height:8%;
`;
export const ChartDiv = styled.div`
  // margin-top:1rem;
  margin-bottom:10px;
  width:50%;
  background-color:#141416;
  height:70vh;  
  @media screen and (max-width: 460px) {
    width:100%;
  }
`;
export const ExchangeDiv = styled.div`
  margin-top:10px;
  width:50%;
  height:100%;
  margin-left:20px;
  display:initial;
  background:#141416;

  @media screen and (max-width: 460px) {
    width:100%;
  }

`;
export const Styles= styled.div`
  padding:1rem;
  min-height:84vh;
  align-items:center;
  table{
    width: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(235, 235, 235) 0px 0px 0px 1px;
    border-radius: 25px;
    border-style: hidden;
    tr{
      :last-child{
        td{
          border-bottom:0;
        }
      }
    }
    th{
      font-size: 0.9em;
      font-weight: 500;
      user-select: none;
      padding: 20px 10px;
      border-bottom: 3px solid rgb(242, 244, 255);
    }
  }
`;