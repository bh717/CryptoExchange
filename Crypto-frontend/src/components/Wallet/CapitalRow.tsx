import { memo, useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import PropTypes from 'prop-types';
import React, {FC} from 'react';
import {ImgBg} from './walletElement';
export interface CapitalRowProps {
  // any props that come into the component
  item?: any,
  index?: number,
}
const CapitalRow:FC<CapitalRowProps> = memo(({ item, index }) => {
  
  console.log("adsfasdf",item.symbol);
  return (
    <tr>
      <td className='nowrap'>
        <ImgBg src={item.symbol} alt="crypto" />
        <strong>{item.name}</strong>
      </td>
      <td className='center'>
        <strong>
          {item.available} 
        </strong>
      </td>
      <td className='center'>
        <strong>{item.onorders}</strong>
      </td>
      <td className='center responsive-hide2'>{item.toloan}</td>
    </tr>
  );
});

CapitalRow.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CapitalRow;
