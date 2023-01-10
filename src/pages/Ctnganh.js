import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Typography } from '@mui/material';
import { Datactnganh } from '../data/Datactnganh';

function Ctnganh() {
  const columns = useMemo(
    () => [
      // {
      //   accessorKey: 'tt', //access nested data with dot notation
      //   header: 'TT',
      //   enableGrouping: false,
      //   size: 10,
      // },
      {
        accessorKey: 'manganh', //normal accessorKey
        header: 'Mã ngành',
        size: 10,
      },
      {
        accessorKey: 'nganh',
        header: 'Ngành',
        size: 80,
        },
      
      
    ],
    [],
  );
  return (
    <div className="mx-auto flex justify-center font-sans h-auto">
      <div className="bg-emerald-500 rounded-2xl p-4 mt-2 shadow-2xl hover:bg-cyan-600
        mobile:w-full tablet:w-11/12 laptop:w-10/12 desktop:w-9/12
        mobile:text-base tablet:text-lg laptop:text-xl desktop:text-2xl
      ">
      <MaterialReactTable 
      
      columns={columns} data={Datactnganh} 
      
      // initialState={{ columnVisibility: { 
      //   tt: false, nhom: false, manganh: false, chuan: false, dthb: false, dtdt: false, dtnl: false, 
      //   clc: false, clchb: false, clcdt: false, clcnl: false, lkqt: false, clcqt: false
      // } }}

      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={true}
      renderDetailPanel={({ row }) => (
        <div className=''>
          {/* <Typography> <strong>{row.original.thm}</strong></Typography>
          <Typography> <strong> Chuẩn:  {row.original.chuan} - CLC: {row.original.clc}</strong></Typography>
          <Typography> <strong> ĐT[HB]:  {row.original.dthb} - ĐT[ĐT]: {row.original.dtdt} - ĐT[ĐGNL]: {row.original.dtnl}</strong></Typography>
          <Typography> <strong> CLC[HB]:  {row.original.clchb} - CLC[ĐT]: {row.original.clcdt} - CLC[ĐGNL]: {row.original.clcnl}</strong></Typography> */}
          <Typography className='text-blue-600 pr-6'> <strong>Học:</strong> {row.original.hoc}</Typography>
          <Typography className='text-black pr-6'> <strong>Làm:</strong> {row.original.lam}</Typography>
        </div>
        )}
      />
      </div>
    </div>
  )
}

export default Ctnganh