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
      <td>
        <div className='rank accent no-select' >{index}</div>
      </td>
      <td className='nowrap'>
        <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
        <strong>{item.name}</strong>
      </td>
      <td className='center'>
        <strong>
          {item.amount} 
        </strong>
      </td>
      <td className='center'>
        <strong className={color}>{item.change}</strong>
      </td>
      <td className='center responsive-hide2'>{item.weight}</td>
      <td className='responsive-hide'>
        <div className='line-chart'>
          <Sparklines data={item.lineChartData} width={150} height={50}>
            <SparklinesLine style={{ strokeWidth: 4 }} color={color} />
          </Sparklines>
        </div>
      </td>
    </tr>
  );
});

CapitalRow.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CapitalRow;
