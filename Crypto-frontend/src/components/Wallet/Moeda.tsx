import React, {FC} from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./Moeda.css";
import {ServicesH2} from './walletElement';
export interface CapitalRowProps {
    // any props that come into the component

    symbol?: any,
    name?: any,
    available?: any,
    onorders?:any,
    toloan?:any,
  }
const Moeda:FC<CapitalRowProps> = ({name,symbol,available,onorders,toloan}) => {
  return (
    <div className="moeda-container">
      <div className="moeda2-row">
        <div className="moeda">
          <img src={symbol} alt="crypto" />
          <ServicesH2>{name}</ServicesH2>
          <p className="moeda-symbol">{available}</p>
        </div>
        <div className="moeda-data">
          <p className="moeda-price">${onorders}</p>
          <p className="moeda-volume">${toloan}</p>
        </div>
      </div>
    </div>
  );
};

export default Moeda;
