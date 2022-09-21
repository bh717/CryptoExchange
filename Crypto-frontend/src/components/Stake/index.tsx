import React, {useState,useEffect} from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FaqButton,ServicesH2, ServicesIConH2,ServicesWrapper,StakeButton,ServicesCard,AssetButton,ServicesP,AssetTextDiv,AssetButtonDiv,ServicesIcon,SymbolDiv, SecondDiv, ButtonDiv,HeadText,BodyText, StakingSpan,FirstDiv,Styles, DescriptionDiv,PictureDiv,ImgCg} from './stakeElement';
import {AiOutlineQuestionCircle} from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Icon1 from '../../image/pic01.webp';
import Icon1 from '../../image/ETH.jpg';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import {useTranslation} from 'react-i18next';


const StakePage = () =>
{

  const { t } = useTranslation(['stake']);

  const [data, setData] = useState<any[]>([]);
  const [show,setShow]=useState(false);

  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        amount: '$4,999 ~ $9,999',
        period: '3 months',
        apy: '35%',
      },
      {
        id: 2,
        amount: '$10,000 ~ $34,900',
        period: '2 months',
        apy: '46%',
      },
      {
        amount: '$35,000 ~ $98,000',
        period: '6 weeks',
        apy: '68%',
      },
      {
        id: 3,
        amount: '$98,000 ~ $250,000',
        period: '4 weeks',
        apy: '93%',
      },
      {
        id: 4,
        amount: '$250,000 <',
        period: '2 weeks',
        apy: '150%',
      },
    ];
    setData(dataArray);
    console.log("dataArray");
  }, []);

  return (
    <Styles>
      <FirstDiv>
        <DescriptionDiv>
            <HeadText>{t("Staking")}</HeadText>
            <BodyText>{t("Start earning rewards from your assets")}</BodyText>  
            <br/> 
            <BodyText>-{t("Earn high-interest yield when you stake ETH on BXO Pro")}</BodyText>
            <br/>
            <BodyText>-{t("Stake ETH on BXO pro and get max 150% bi weekly APY")}</BodyText>
            <br/>
            <BodyText>-{t("Invite friends to stake and get 3%weekly APY on your initial investment")}.</BodyText>
        </DescriptionDiv>
        <ButtonDiv>
          <FaqButton to='about' smooth={true} duration={500} spy={true} offset={-80} >
            <AiOutlineQuestionCircle/>
            <StakingSpan>{t("Staking FAQ")}</StakingSpan>
          </FaqButton>
        </ButtonDiv>
      </FirstDiv>
      <hr/>
      <SecondDiv>
        <ServicesH2>{t("Asset Stake")}</ServicesH2>
        <ServicesWrapper>
          <ServicesCard>
            <SymbolDiv>
              <ServicesIcon src={Icon1} />
              <ServicesIConH2>ETH</ServicesIConH2>
            </SymbolDiv>
            <hr/>
            <SymbolDiv>
              <ServicesP>{t("weekly APY rate")}</ServicesP>
              <ServicesP>150.00%</ServicesP>
            </SymbolDiv>
            <SymbolDiv>
              <AssetTextDiv>
                <ServicesP>{t("Duration")} {t("days")}</ServicesP>
              </AssetTextDiv>
              <AssetButtonDiv>
                <AssetButton>14</AssetButton>
                <AssetButton>30</AssetButton>
                <AssetButton>60</AssetButton>
              </AssetButtonDiv>
            </SymbolDiv>
            <StakeButton onClick={handleShow}>
              {t("Stake")}
            </StakeButton>
          </ServicesCard>
        </ServicesWrapper>
      </SecondDiv>
      <hr/>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{t("Stake ETH on BXO")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon1'>{t("Referral code")}:</InputGroup.Text>
            <Form.Control aria-label='Username' aria-describedby='basic-addon1'/>
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon1'>{t("Available Currency")}:</InputGroup.Text>
            <Form.Control placeholder='USDT' aria-label='Username' aria-describedby='basic-addon1'/>
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon1'>{t("Stake asset")}:</InputGroup.Text>
            <Form.Control placeholder='ETH' aria-label='Username' aria-describedby='basic-addon1'/>
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon1'>{t("Stake Ammount")}:</InputGroup.Text>
            <Form.Control aria-label='Username' aria-describedby='basic-addon1'/>
          </InputGroup>          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("Close")}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {t("Ok")}
          </Button>
        </Modal.Footer>
      </Modal>
    </Styles>
  );
  
};

export default StakePage;