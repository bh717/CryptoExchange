import React from 'react';
import { useState, useEffect } from 'react';
import CapitalRow from './CapitalRow';
import { BiArrowFromLeft } from "react-icons/bi";
import Moeda from "./Moeda";
// import SiteLayout from '../layouts/SiteLayout';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import {useTranslation} from 'react-i18next';
import {CheckLabel,CheckDiv,TextBg,Styles,ButtonBg,ButtonBg1,DepositAr,AmounttAr,HrBg,DescripDiv,OptionDiv,TextBg1,AmountDiv,ButtonDIv,TableDiv} from './walletElement';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
const WalletPage = () =>
{
 
  const { t } = useTranslation(['wallet']);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        symbol:'./image/USDT_Symbol.png',
        name: 'USDT',
        available: 'Tether USDT',
        onorders: '747.1442',
        toloan: '747.14USD',
      },
      {
        id: 2,
        name: 'BTC',
        symbol:'./image/BTC_Symbol.png',
        available: 'Bitcoin',
        onorders: '0.00000095',
        toloan: '0.001USD',
      },
      {
        id: 3,
        name: 'ETH',
        symbol:'./image/ETH_Symbol.png',
        available: 'Ethereum',
        onorders: '0.00000000',
        toloan: '0.00000000',
      },
      {
        id: 1,
        symbol:'./image/USDT_Symbol.png',
        name: 'GAS',
        available: 'GAS DAO',
        onorders: '0.00000000',
        toloan: '0.00000000',
      },
      {
        id: 2,
        name: 'XRP',
        symbol:'./image/XRP_Symbol.png',
        available: 'Ripple',
        onorders: '0.00000000',
        toloan: '0.00000000',
      },
    ];
    setData(dataArray);
    console.log("dataArray");
  }, []);
  return (
    <Styles>
      <DescripDiv>
        <TextBg>{t("Wallet Total Balances")}[USDT]</TextBg>
        <AmountDiv>
            <DepositAr  value={0.03611380}/>
            <BiArrowFromLeft/>
            <AmounttAr  value={"747.16USD"}/>
        </AmountDiv>  
        <ButtonDIv>
          <ButtonBg>{t("Deposit")}</ButtonBg>
          <ButtonBg>{t("WithDraw")}</ButtonBg>
          <ButtonBg>{t("Transfer")}</ButtonBg>
        </ButtonDIv>
      </DescripDiv>
      <HrBg/> 
      <TableDiv>
        <TextBg1>{t("Low Balances Exchange")}</TextBg1>
        <OptionDiv>
          <CheckDiv>
            <input type="checkbox" id="defaultUnchecked"/> 
            <CheckLabel>{t("Hide zero balances")}</CheckLabel>
          </CheckDiv>
          <ButtonBg1>{t("Search")}</ButtonBg1>
        </OptionDiv>
        <div className="moeda-app">
        {data.map((store) => {
          return (
            <Moeda
              key={store.id}
              name={store.name}
              available={store.available}
              symbol={store.symbol}
              onorders={store.onorders}
              toloan={store.toloan}
            />
          );
        })}
      </div>
      </TableDiv>
    </Styles>
  );
  
};

export default WalletPage;