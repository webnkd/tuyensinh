import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Typography } from '@mui/material';
import { Datanganh } from '../data/Datanganh';

function Nganh() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'tt', //access nested data with dot notation
        header: 'TT',
        enableGrouping: false,
        size: 10,
      },
      {
        accessorKey: 'nhom',
        header: 'Nhóm ngành',
        enableGrouping: true,
        size: 120,
      },
      {
        accessorKey: 'manganh', //normal accessorKey
        header: 'Mã ngành',
        enableHiding: false, // Không ẩn được
        // size: 30,
      },
      {
        accessorKey: 'nganh',
        header: 'Tên ngành',
        enableHiding: true, 
        enableGrouping: false,
        size: 120,
      },
      {
        accessorKey: 'thm',
        header: 'THM',
        size: 40,
      },
      {
        accessorKey: 'chuan',
        header: 'Chuẩn',
        size: 15,
      },
      {
        accessorKey: 'dthb',
        header: 'ĐCHB',
        columnFilterModeOptions: ['between', 'lessThan', 'greaterThan'],
        size: 15,
      },
      {
        accessorKey: 'dtdt',
        header: 'ĐCĐT',
        columnFilterModeOptions: ['between', 'lessThan', 'greaterThan'],
        size: 15,
      },
      {
        accessorKey: 'dtnl',
        header: 'ĐCNL',
        columnFilterModeOptions: ['between', 'lessThan', 'greaterThan'],
        size: 15,
      },
      {
        accessorKey: 'clc',
        header: 'CLC',
        size: 15,
      },
      {
        accessorKey: 'clchb',
        header: 'ĐCHB-CLC',
        columnFilterModeOptions: ['between', 'lessThan', 'greaterThan'],
        size: 15,
      },
      {
        accessorKey: 'clcdt',
        header: 'ĐCĐT-CLC',
        columnFilterModeOptions: ['between', 'lessThan', 'greaterThan'],
        size: 15,
      },
      {
        accessorKey: 'clcnl',
        header: 'ĐCNL-CLC',
        columnFilterModeOptions: ['between', 'lessThan', 'greaterThan'],
        size: 15,
      },
      {
        accessorKey: 'lkqt',
        header: 'LKQT',
        size: 10,
      },
      {
        accessorKey: 'clcqt',
        header: 'CLC-QT',
        size: 10,
      },
      // {
      //   accessorKey: 'hoc',
      //   header: 'học',
      // },
      // {
      //   accessorKey: 'lam',
      //   header: 'làm',
      // },
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
      
      columns={columns} data={Datanganh} 
      
      initialState={{ columnVisibility: { 
        tt: false, nhom: false, manganh: false, chuan: false, dthb: false, dtdt: false, dtnl: false, 
        clc: false, clchb: false, clcdt: false, clcnl: false, lkqt: false, clcqt: false
      } }}
      //enableGrouping
      enableColumnFilterModes
      enableColumnResizing
      columnResizeMode="onChange"
      renderDetailPanel={({ row }) => (
        <div className=''>
          <Typography> <strong>{row.original.thm}</strong></Typography>
          <Typography> <strong> Chuẩn:  {row.original.chuan} - CLC: {row.original.clc}</strong></Typography>
          <Typography> <strong> ĐT[HB]:  {row.original.dthb} - ĐT[ĐT]: {row.original.dtdt} - ĐT[ĐGNL]: {row.original.dtnl}</strong></Typography>
          <Typography> <strong> CLC[HB]:  {row.original.clchb} - CLC[ĐT]: {row.original.clcdt} - CLC[ĐGNL]: {row.original.clcnl}</strong></Typography>
          <Typography className='text-blue-600 pr-6'> <strong>Học:</strong> {row.original.hoc}</Typography>
          <Typography className='text-black pr-6'> <strong>Làm:</strong> {row.original.lam}</Typography>
        </div>
        )}
      />
      </div>
    </div>
  )
}

export default Nganh