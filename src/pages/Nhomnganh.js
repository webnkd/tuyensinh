import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Datanhomnganh } from '../data/Datanhomnganh';

function Nhomnganh() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'tt', 
        header: 'TT',
        size: 5,
        enableColumnActions: false,
      },
      {
        accessorKey: 'nhom',
        header: 'Nhóm ngành',
        size: 80,
        enableColumnActions: false,
      },
      {
        accessorKey: 'nganh',
        header: 'Ngành',
        size: 120,
        enableColumnActions: false,
      },
      {
        accessorKey: 'manganh', 
        header: 'Mã ngành',
        size: 10,
        enableColumnActions: false,
      },
      {
        accessorKey: 'thm',
        header: 'THM',
        size: 50,
      },
      {
        accessorKey: 'daotao',
        header: 'Đào tạo',
        size: 20,
      },
      {
        accessorKey: 'diemchuan.dthb',
        header: 'ĐT-HB',
        size: 7,
      },
      {
        accessorKey: 'diemchuan.dtdt',
        header: 'ĐT-ĐT',
        size: 7,
      },
      {
        accessorKey: 'diemchuan.dtnl',
        header: 'ĐT-NL',
        size: 7,
      },
      {
        accessorKey: 'diemchuan.clchb',
        header: 'CLC-HB',
        size: 7,
      },
      {
        accessorKey: 'diemchuan.clcdt',
        header: 'CLC-ĐT',
        size: 7,
      },
      {
        accessorKey: 'diemchuan.clcnl',
        header: 'CLC-NL',
        size: 7,
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
      
      columns={columns} data={Datanhomnganh} 
      
       initialState={{ columnVisibility: { 
        tt: false, nganh: false, manganh: false, 
        'diemchuan.dthb': false,'diemchuan.dtdt': false , 'diemchuan.dtnl': false,
        'diemchuan.clchb': false,'diemchuan.clcdt': false , 'diemchuan.clcnl': false,
       } }}
      //enableGrouping
      enableColumnFilterModes
     />
      </div>
    </div>
  )
}

export default Nhomnganh