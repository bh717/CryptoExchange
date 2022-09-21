import React from 'react';
import "./Style.css";
import {AdvancedRealTimeChart} from "react-ts-tradingview-widgets";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ServicesH2,Optiondiv,NavBtnLink,ServicesP,ChartDiv,ExchangeDiv,TradeDiv,SelectBg,InputBg,FromDiv,ToDiv,ButtonDiv} from './tradeElement';
import { Button } from '../ButtonElements';
import {BiArrowToBottom} from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/Form';

import {useTranslation} from 'react-i18next';

const TradePage = () =>
{
  const { t } = useTranslation(['trade']);
  return (
    <TradeDiv>
      <ChartDiv>
        <AdvancedRealTimeChart 
        theme="dark"  
        symbol={"BTCUSDT"}
        style="3"
        autosize
        />
      </ChartDiv>
      <ExchangeDiv>

        <FromDiv>
          <Optiondiv>
            <ServicesH2>{t("Crypto Buy")}</ServicesH2>
            <InputGroup className='mb-3'>
              <InputGroup.Text id='inputGroup-sizing-sm'>{t("Buy Price")}:</InputGroup.Text>
              <Form.Control aria-label='Username' placeholder="Please enter the price" aria-describedby='basic-addon1'/>
              <InputGroup.Text id='inputGroup-sizing-sm'>USDT</InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id='inputGroup-sizing-sm'>{t("Lever")}</InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
                title="3x"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">1x</Dropdown.Item>
                <Dropdown.Item href="#">3x</Dropdown.Item>
                <Dropdown.Item href="#">5x</Dropdown.Item>
                <Dropdown.Item href="#">7x</Dropdown.Item>
              </DropdownButton>
              <FormControl aria-label="Text input with dropdown button" />
            </InputGroup>
            <InputGroup className='mb-3'>
              <InputGroup.Text id='basic-addon1'>{t("Buy Amount")}:</InputGroup.Text>
              <Form.Control aria-label='Username' placeholder="Please enter the number"aria-describedby='basic-addon1'/>
            </InputGroup>
            <ButtonDiv>
              <NavBtnLink to="/trade">{t("Buy")}</NavBtnLink>
            </ButtonDiv>
            </Optiondiv>
        </FromDiv>

        <FromDiv>
          
          <Optiondiv>
            <ServicesH2>{t("Crypto Sell")}</ServicesH2>
            <InputGroup className='mb-3'>
              <InputGroup.Text id='inputGroup-sizing-sm'>{t("Sell Price")}:</InputGroup.Text>
              <Form.Control aria-label='Username'  placeholder="Please enter the price" aria-describedby='basic-addon1'/>
              <InputGroup.Text id='inputGroup-sizing-sm'>USDT</InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id='inputGroup-sizing-sm'>{t("Lever")}</InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
                title="3x"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">1x</Dropdown.Item>
                <Dropdown.Item href="#">3x</Dropdown.Item>
                <Dropdown.Item href="#">5x</Dropdown.Item>
                <Dropdown.Item href="#">7x</Dropdown.Item>
              </DropdownButton>
              <FormControl aria-label="Text input with dropdown button" />
            </InputGroup>   
            <InputGroup className='mb-3'>
              <InputGroup.Text id='basic-addon1'>{t("Sell Amount")}:</InputGroup.Text>
              <Form.Control aria-label='Username' placeholder="Please enter the number" aria-describedby='basic-addon1'/>
            </InputGroup>
            <ButtonDiv>
              <NavBtnLink to="/trade">{t("Sell")}</NavBtnLink>
            </ButtonDiv>  
          </Optiondiv>
        </FromDiv>

      </ExchangeDiv>
    </TradeDiv>
  );
  
};

export default TradePage;