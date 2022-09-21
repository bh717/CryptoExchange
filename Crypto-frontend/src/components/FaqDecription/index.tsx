import React, {useState,useEffect} from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FaqButton,ServicesH2, HowDiv,ServicesWrapper,ServicesCard,AssetButton,ServicesP,AssetTextDiv,AssetButtonDiv,ServicesIcon,SymbolDiv, SecondDiv, ButtonDiv,HeadText,BodyText, StakingSpan,FirstDiv,Styles, DescriptionDiv,PictureDiv,ImgCg} from './stakeElement';
import {AiOutlineQuestionCircle} from "react-icons/ai";
// import Icon1 from '../../image/pic01.webp';
import {Table,Thead,Tr,Th,Tbody,Td} from 'react-super-responsive-table';
import Icon1 from '../../image/ETH.jpg';
import { Accordion } from './Accordion';

import {useTranslation} from 'react-i18next';

let renderCount = 0;

const FaqDescriptionPage = () =>
{
  const { t } = useTranslation(['faqdescription']);
  const [data, setData] = useState<any[]>([]);
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
    <Styles id='about'>
      <HeadText>FAQ</HeadText>
      <Accordion title={t("What is Staking?")} >
        {t("Our ETH stakes are invested in a totally different way from the traditional hence its high and lucrative APY. This is how it works, despite the falling crypto prices, the NFT market at least 33% exponential growth each yearly quarter and is forecasted to reach approximately $80 billion in net sales volume by 2025.")}
        {t("BXO Pro works with a Blockchain Intelligence Group risk and investigation explorer for NFTs built on the QLUE data analytics platform to automate NFT trades simultaneously for a high yield probability.")}
        {t("this is where our clients come in, we use your staked")}
        {t("ETH coins to fund the private high yield NFT smart contracts trades which in turn automatically deposits revenue back into your staking wallet within a fixed amount of time according to amount allocated by each account into our contract.")}
      </Accordion>
      <Accordion title={t("How can i get rewards from my assets?")}>
        {t("Stake your assets for the preferred duration and annual rate until the end of the stake.")}
      </Accordion>
      <Accordion title={t("Can I automatically reinvest my asset in the same stake?")}>
        {t("Yes. Please choose Auto prolonation while making new Stake.")}
      </Accordion>
      <Accordion title={t("What will happen if I make early unstake?")}>
        {t("It depend on type of early unstake option: with earning or without earning. In first case, you can unstake anytime and get current rewards, in second case- if you mistake, you will get only staked amount.")}
      </Accordion>
      <HowDiv>
        <h1 style={{color:'white'}}>{t("HOW IT WORKS")}</h1>
        <br/>
        <Table>
          <Thead style={{color:'white'}}>
            <Tr>
              <Th>{t("Stake amount")}</Th>
              <Th>{t("Hold period")}</Th>
              <Th>{t("APY increase")}</Th> 
            </Tr>
          </Thead>
          <Tbody style={{color:'white'}}>
            <Tr>
              <Td>$4,999 ~ $9,999</Td>
              <Td>3{t("months")}</Td>
              <Td>35%</Td>
            </Tr>
            <Tr>
              <Td>$10,000 ~ $34,900</Td>
              <Td>2{t("months")}</Td>
              <Td>46%</Td>
            </Tr>
            <Tr>
              <Td>$35,000 ~ $98,000</Td>
              <Td>6{t("weeks")}</Td>
              <Td>35%</Td>
            </Tr>
            <Tr>
              <Td>$98,000 ~ $250,000</Td>
              <Td>4{t("weeks")}</Td>
              <Td>93%</Td>
            </Tr>
            <Tr>
              <Td>$250,000 ~</Td>
              <Td>2{t("weeks")}</Td>
              <Td>150%</Td>
            </Tr>
          </Tbody>
        </Table>
      </HowDiv>
    </Styles>
  );
  
};

export default FaqDescriptionPage;