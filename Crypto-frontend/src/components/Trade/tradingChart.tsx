import React from "react";
import {AdvancedRealTimeChart} from "react-ts-tradingview-widgets";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ChartDiv,ExchangeDiv,TradeDiv,FromDiv,FromInput} from './tradeElement';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const TradingChart = () => {
   return (
    // <TradeDiv>
      <ChartDiv>
        <AdvancedRealTimeChart 
        theme="dark"  
        symbol={"BTCUSDT"}
        style="3"
        autosize
        />
      </ChartDiv>
  );
};
export default TradingChart;
