import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  
  const editing = { allowDeleting: true, allowEditing: true };
  const toolbarOptions = ['Search'];

  return (
    <div className="p-2 m-2 mt-24 bg-white md:m10 md:p-10 rounded-3xl">
      <Header category="Page"  title="Employees" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar ]} />
      </GridComponent>
    </div>
  )
}

export default Employees