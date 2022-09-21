import { memo, useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import PropTypes from 'prop-types';
import React, {FC} from 'react';
export interface CapitalRowProps {
  // any props that come into the component
  item?: any,
  index?: number,
}
const CapitalRow:FC<CapitalRowProps> = memo(({ item, index }) => {
  const [color, setColor] = useState('');
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, []);

  const handleMenuOpen = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <tr>
      <td className='nowrap'>
        {/* <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} /> */}
        <strong>{item.amount}</strong>
      </td>
      <td className='center'>
        <strong>
          {item.period} 
        </strong>
      </td>
      <td className='center'>
        <strong className={color}>{item.apy}</strong>
      </td>
    </tr>
  );
});

CapitalRow.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CapitalRow;
