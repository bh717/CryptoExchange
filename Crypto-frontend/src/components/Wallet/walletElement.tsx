import styled from 'styled-components';

export const Styles= styled.div`
  padding:1rem;
  min-height:84vh;
  display:flex;
  background:#141416;
  // border-radius: 25px;
  border-style: hidden;
  // border: 0 solid rgb(242, 244, 255);
  flex-direction: column;
`;
export const HrBg = styled.hr`
  width:100%;
  color:white;
  height:2px;
`;
export const DescripDiv = styled.div`
  // background:white;
  // padding:1rem;
  // width:100%;
  // height:100%;
  // justify-content:center;
  // align-items:left;
  // display:flex;
  // border:none;
`;
export const TextBg = styled.h1`
  font-size:1rem;
  color:white;
  @media screen and (max-width: 480px) {
    font-size:1.5rem;
  }
  @media screen and (min-width:481px) and (max-width: 768px) {
    font-size:2rem;
  }
  @media screen and (min-width:769px) and (max-width:1024px) {
    font-size:2.5rem;
  }
  @media screen and (min-width:1025px) and (max-width:1500px) {
    font-size:3rem;
  }
`; 
export const TextBg1 = styled.h1`
  font-size:30px;
  color:white;
  @media screen and (max-width: 480px) {
    font-size:1rem;
  }
  @media screen and (min-width:481px) and (max-width: 768px) {
    font-size:2rem;
  }
  @media screen and (min-width:769px) and (max-width:1024px) {
    font-size:2.5rem;
  }
  @media screen and (min-width:1025px) and (max-width:1500px) {
    font-size:3rem;
  }
`; 
export const DepositAr= styled.input`
  font-size: 3em;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  -webkit-user-modify: read-only;
  border: none;
  user-select: none;
  background-color: transparent;
  resize: none;
  color:white;
  outline: none;
  text-align: center;
  overflow:auto;
  @media screen and (max-width: 480px) {
    font-size:1.5rem;
  }
`;
export const ButtonBg=styled.button`
  border-radius: 10px;
  box-shadow: 0 0 0 2px #353945 inset;
  background: #f19f08;
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
export const CheckDiv = styled.div`
  display:flex;
  justify-item:center;
  align-items: center;
`;
export const ButtonBg1=styled.button`
  border-radius: 10px;
  box-shadow: 0 0 0 2px #353945 inset;
  background: #1a1815;
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
export const AmounttAr= styled.input`
  font-size: 2rem;
  font-family: Verdana,Arial,Helvetica,sans-serif;
  -webkit-user-modify: read-only;
  border: none;
  color:white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  resize: none;
  outline: none;
  text-align: center;
  overflow: auto;
  @media screen and (max-width: 480px) {
    font-size:1rem;
  }
`;
export const ButtonDIv=styled.div`
  padding:1rem;
  width:100%;
  height:100%;
  justify-content:center;
  align-items:left;
  display:flex;
`;
export const CheckLabel=styled.label`
  color: #fdf3f3;
  font-size: 15px;
  margin-top: -2px;
  margin-left: 2px;
`;
export const OptionDiv=styled.div`
  padding:1rem;
  // padding:0,30px;
  justify-content: space-between;
  width:100%;
  height:100%;
  
  // justify-content:center;
  // align-items:left;
  display:flex;
`;
export const Item1Div = styled.div`
  justify-content:center;
  align-items:left;
`;
export const Item2Div = styled.div`
  justify-content:center;
  align-items:left;
`;
export const Item3Div = styled.div`
  justify-content:center;
  align-items:left;
`;
export const TableDiv=styled.div`
  // padding:1rem;
  width:100%;
  height:100%;
  justify-content:center;
  align-items:left;
  display:flex;
  flex-direction:column;
  border:none;

  table{
    width: 100%;
    background-color:#141416;
    box-shadow: rgb(235, 235, 235) 0px 0px 0px 1px;
    border-radius: 10px;
    font-color:white;
    border-style: hidden;
    tr{
      color:white;
      border: none;
      text-align: left;
      :last-child{
        td{
          border-bottom:0;
          font-size:1rem;
        }
      }
    }
    th{
      font-size: 2rem;
      font-weight: 500;
      user-select: none;
      padding: 20px 10px;
      border-bottom: 3px solid rgb(242, 244, 255);
    }
  }
`;
export const AmountDiv= styled.div`
  padding:1rem;
  width:100%;
  height:100%;
  display:flex;
  justify-content: space-between;
  
  align-items: center;
`;

export const PictureDiv= styled.div`
  padding:1rem;
  width:50%;
  height:100%;
  align-items:left;
`;
export const ImgBg=styled.img`
  width:20px;
  height:20px;
`;
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: white;
  font-family: 'Droid Sans', serif;
`;