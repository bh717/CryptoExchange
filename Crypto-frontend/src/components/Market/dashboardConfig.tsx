import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import styled from 'styled-components';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'NAME',
    width: 260,
    renderCell: (params: GridRenderCellParams<any>) => {
      return (
        <div className='index' style={{ color: '#5B7FFF' }}>
          {params.value}
        </div>
      );
    },
  },
  {
    field: 'floorPrice',
    headerName: 'FLOOR PRICE',
    width: 150,
    sortable: true,
    renderCell: (params: GridRenderCellParams<any>) => {
      return (
        <CollectionName className='innerContent' style={{ display: 'flex' }}>
          {params.value}
        </CollectionName>
      );
    },
  },
  {
    field: 'averagePrice',
    headerName: 'AVG. PRICE',
    width: 120,
    sortable: true,
  },
  {
    field: 'rarityRank',
    headerName: 'RARITY RANK',
    width: 100,
    sortable: true,
  },
  {
    field: 'sales',
    headerName: 'NUMBER OF SALES',
    width: 160,
    sortable: true,
  },
  {
    field: 'mints',
    headerName: 'NUMBER OF MINTS',
    width: 130,
    sortable: true,
  },
  {
    field: 'volume',
    headerName: 'TRADED VOLUME IN ETH',
    width: 190,
  },
  {
    field: 'cap',
    headerName: 'MARKET CAP',
    width: 190,
  },
  {
    field: 'status',
    headerName: 'REVEAL STATUS',
    width: 190,
  },
];

const CollectionName = styled.div`
  display: flex;
  align-items: center;
`;

export default columns;
