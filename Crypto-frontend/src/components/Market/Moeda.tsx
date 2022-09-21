import React, {FC} from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./Moeda.css";
import {ServicesH2} from './marketElement';
export interface CapitalRowProps {
    // any props that come into the component
    name?: any,
    price?: any,
    symbol?: any,
    marketcap?:any,
    volume?:any,
    image?:any,
    priceChange?:any,
  }
const Moeda:FC<CapitalRowProps> = ({name,price,symbol,marketcap,volume,image,priceChange}) => {
  return (
    <div className="moeda-container">
      <div className="moeda1-row">
        <div className="moeda">
          <img src={image} alt="crypto" />
          <ServicesH2>{name}</ServicesH2>
          <p className="moeda-price">${price}</p>
          {priceChange < 0 ? (
              <p className="moeda-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="moeda-percent green">{priceChange.toFixed(2)}%</p>
            )}
          {/*<p className="moeda-symbol">{symbol}</p>*/}
          {/* <p className="moeda-symbol">{symbol}</p>
        </div>
        <div className="moeda-data">
          <p className="moeda-price">${price}</p>
          <p className="moeda-volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="moeda-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="moeda-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="moeda-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Moeda;
